# file: kafka_listener.py
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from fastapi import FastAPI
from confluent_kafka import Consumer, KafkaError
from threading import Thread
import logging
import time
import joblib
import os
from google.protobuf.json_format import MessageToDict
from medical_record_pb2 import MedicalRecord
import numpy as np
from scipy.sparse import csr_matrix, hstack
from pathlib import Path

app = FastAPI()
logging.basicConfig(level=logging.INFO)

kafka_config = {
    'bootstrap.servers': 'localhost:9094',
    'group.id': 'fastapi-consumer-group',
    'auto.offset.reset': 'earliest'
}

consumer = Consumer(kafka_config)
consumer.subscribe(['medical-record'])

model = None
vectorizer = None

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "ml_model/model.pkl"
VECTORIZER_PATH = BASE_DIR / "ml_model/vectorizer.pkl"


def load_model():
    global model, vectorizer
    try:
        logging.info(f"Current working directory: {os.getcwd()}")
        logging.info(f"Loading model from: {MODEL_PATH}")
        logging.info(f"Loading vectorizer from: {VECTORIZER_PATH}")

        if not MODEL_PATH.exists():
            raise FileNotFoundError(f"Model file missing at {MODEL_PATH}")
        if not VECTORIZER_PATH.exists():
            raise FileNotFoundError(f"Vectorizer file missing at {VECTORIZER_PATH}")

        model = joblib.load(MODEL_PATH)
        vectorizer = joblib.load(VECTORIZER_PATH)
        logging.info("ML model and vectorizer loaded successfully.")
    except Exception as e:
        logging.exception("Failed to load model/vectorizer")


def append_record_to_csv(record: MedicalRecord, risk: str):
    os.makedirs("kafka_data", exist_ok=True)
    path = "kafka_data/medical_records.csv"
    safe_lab_values = []
    for l in record.labResults:
        try:
            val = float(str(l.resultValue).strip('%'))
            safe_lab_values.append(val)
        except ValueError:
            continue

    entry = {
        "notes": record.notes,
        "lab_values": safe_lab_values,
        "risk": "High" if risk == "2" else "Medium" if risk == "1" else "Low"
    }
    df = pd.DataFrame([entry])
    df.to_csv(path, mode='a', index=False, header=not os.path.exists(path))


def recommend_plan(risk_level: str) -> str:
    if risk_level == "0":
        return "Rikontroll pas 6 muajsh, ndiq dieten dhe aktivitetin fizik."
    elif risk_level == "1":
        return "Konsultë me endokrinologun dhe analiza laboratorike mujore."
    elif risk_level == "2":
        return "Kontroll urgjent, konsulte mjekesore dhe monitorim te perditshem."
    return "Nuk ka rekomandim."


def predict_risk_level(record: MedicalRecord) -> tuple[str, str]:
    if model is None or vectorizer is None:
        logging.error("Model or Vectorizer is not loaded. Prediction cannot proceed.")
        return ("Error", "Model/Vectorizer not loaded")

    try:
        text_input = [record.notes] if record.notes else [""]
        X_text = vectorizer.transform(text_input)

        lab_values = []
        for lr in record.labResults:
            try:
                val = float(str(lr.resultValue).strip('%'))
                if val != 0.0:
                    lab_values.append(val)
            except (ValueError, TypeError):
                continue

        if lab_values:
            numeric = np.array([
                np.mean(lab_values),
                np.std(lab_values),
                len(lab_values)
            ]).reshape(1, -1)
        else:
            numeric = np.zeros((1, 3))

        numeric_sparse = csr_matrix(numeric)
        X_combined = hstack([X_text, numeric_sparse])
        pred = model.predict(X_combined)
        return str(pred[0]), recommend_plan(str(pred[0]))

    except Exception as e:
        logging.error("Prediction failed: %s", e)
        return ("Unknown", "Rekomandim i panjohur")


def write_to_txt(message: str):
    try:
        with open("medical_records.txt", "a", encoding="utf-8") as file:
            file.write(message + "\n" + "-"*50 + "\n")
        logging.info("Successfully wrote record to file.")
    except Exception as e:
        logging.error("Error while writing to text file: %s", e)


def process_kafka_message(message_bytes: bytes):
    try:
        medical_record = MedicalRecord()
        medical_record.ParseFromString(message_bytes)
        risk, recommendation = predict_risk_level(medical_record)
        append_record_to_csv(medical_record, risk)

        message = f"""
        Received Medical Record
        Patient ID: {medical_record.pacientId}
        Diagnosis: {medical_record.diagnosis}
        Treatment: {medical_record.treatmentPlan}
        Notes: {medical_record.notes}
        Created At: {medical_record.createdAt}
        Risk Level: {risk}
        Recommendation: {recommendation}

        Lab Results:
        """

        for lab_result in medical_record.labResults:
            message += f"""
            Test Type: {lab_result.testType}
            Result Value: {lab_result.resultValue}
            Result Date: {lab_result.resultDate}
            """

        message += "\nMedical Images:\n"
        for medical_image in medical_record.medicalImages:
            message += f"""
            Image Type: {medical_image.imageType}
            File URL: {medical_image.fileUrl}
            Uploaded At: {medical_image.uploadedAt}
            """

        write_to_txt(message)

    except Exception as e:
        logging.error("Error while processing Kafka message: %s", e)


def kafka_consume_loop():
    while True:
        try:
            msg = consumer.poll(1.0)
            if msg is None:
                continue
            if msg.error():
                if msg.error().code() == KafkaError._PARTITION_EOF:
                    logging.info(f"End of partition reached: {msg.partition()} {msg.offset()}")
                else:
                    logging.error(f"Kafka Error: {msg.error()}")
                continue

            process_kafka_message(msg.value())
        except Exception as e:
            logging.error("Error in Kafka consumption loop: %s", e)
        time.sleep(1)


@app.on_event("startup")
def start_kafka_listener():
    load_model()
    thread = Thread(target=kafka_consume_loop, daemon=True)
    thread.start()
    logging.info("Kafka consumer thread started")


@app.on_event("shutdown")
def shutdown():
    logging.info("Shutting down Kafka consumer...")
    consumer.close()


@app.get("/")
def health_check():
    return {"status": "Kafka listener with ML model running"}


@app.post("/recommendation")
def get_recommendation(record: dict):
    try:
        proto_record = MedicalRecord()
        proto_record = MessageToDict(record, preserving_proto_field_name=True)
        # Deserialize into MedicalRecord format
        medical_record = MedicalRecord()
        medical_record.ParseFromString(record["protobuf"])
        risk, recommendation = predict_risk_level(medical_record)
        return {"risk_level": risk, "recommendation": recommendation}
    except Exception as e:
        return {"error": str(e)}
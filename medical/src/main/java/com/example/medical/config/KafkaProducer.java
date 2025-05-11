package com.example.medical.config;

import com.example.medical.model.MedicalRecord;
import com.example.medical.repository.MedicalRecordRepository;
import medical.records.MedicalRecordOuterClass;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class KafkaProducer {

    private static final Logger log = LoggerFactory.getLogger(KafkaProducer.class);
    private final KafkaTemplate<String, byte[]> kafkaTemplate;
    private final MedicalRecordRepository medicalRecordRepository;

    public KafkaProducer(KafkaTemplate<String, byte[]> kafkaTemplate, MedicalRecordRepository medicalRecordRepository) {
        this.kafkaTemplate = kafkaTemplate;
        this.medicalRecordRepository = medicalRecordRepository;
    }

    public void sendMedicalRecordEvent(MedicalRecordOuterClass.MedicalRecord medicalRecord) {
        try {
            kafkaTemplate.send("medical-record", medicalRecord.toByteArray());
            log.info("Sent MedicalRecord event for patient: {}", medicalRecord.getPacientId());
        } catch (Exception e) {
            log.error("Error sending MedicalRecord event: {}", medicalRecord, e);
        }
    }

    // Merr nga databaza dhe dërgo në Kafka
    public void fetchFromDbAndSendToKafka(String id) {
        Optional<MedicalRecord> optionalRecord = medicalRecordRepository.findById(id);

        if (optionalRecord.isPresent()) {
            MedicalRecord record = optionalRecord.get();

            // Mapped from DB entity -> Proto message
            MedicalRecordOuterClass.MedicalRecord protoRecord = MedicalRecordOuterClass.MedicalRecord.newBuilder()
                    .setId(record.getId())
                    .setPacientId(record.getPacientId().toString())
                    .setDiagnosis(record.getDiagnosis())
                    .setTreatmentPlan(record.getTreatmentPlan())
                    .setNotes(record.getNotes())
                    .setCreatedAt(record.getCreatedAt().toString())
                    // Shto LabResult pa `image`
                    .addAllLabResults(record.getLabResults().stream().map(lab ->
                            MedicalRecordOuterClass.LabResult.newBuilder()
                                    .setTestType(lab.getTestType())
                                    .setResultValue(lab.getResultValue())
                                    .setResultDate(lab.getResultDate().toString())
                                    // Fushën `image` e kemi hequr
                                    .build()
                    ).toList())
                    .addAllMedicalImages(record.getMedicalImages().stream().map(img ->
                            MedicalRecordOuterClass.MedicalImage.newBuilder()
                                    .setImageType(img.getImageType())
                                    .setFileUrl(img.getFileUrl())
                                    .setUploadedAt(img.getUploadedAt().toString())
                                    .build()
                    ).toList())
                    .build();

            sendMedicalRecordEvent(protoRecord);
        } else {
            log.warn("No medical record found with id: {}", id);
        }
    }
}

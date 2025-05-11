# train_model.py
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import StratifiedKFold, cross_val_score
from scipy.sparse import hstack, csr_matrix
import joblib
import os

os.makedirs("ml_model", exist_ok=True)

# Expanded dataset
train_data = pd.DataFrame({
    "notes": [
        "Well-managed type 2 diabetes with normal glucose",  # Low
        "Mild diabetes with occasional high glucose",       # Medium
        "Diabetes with controlled glucose but high cholesterol",  # Medium
        "Type 1 diabetes with stable glucose levels",       # Low
        "Type 2 diabetes with retinopathy and high blood pressure",  # Medium
        "Type 1 diabetes with moderate glucose fluctuations",  # Medium
        "Mild diabetes with normal glucose and no complications",  # Low
        "Severe insulin resistance and kidney issues",      # High
        "Diabetic ketoacidosis and elevated ketones",       # High
        "Uncontrolled type 2 diabetes with high HbA1c",     # High
        "Type 1 diabetes with frequent hypoglycemia",       # High
        "Mild diabetes with normal glucose and no symptoms", # Low
        "Well-managed diabetes with good diet and exercise", # Low
    ],
    "lab_values": [
        [7.2, 7.0, 7.1],
        [7.8, 8.0, 7.9],
        [8.5, 8.7, 8.6],
        [6.8, 6.9, 6.7],
        [9.5, 9.7, 9.6],
        [10.5, 10.7, 10.3],
        [8.0, 8.1, 8.0],
        [14.0, 14.2, 13.8],
        [11.0, 11.2, 10.8],
        [13.5, 13.7, 13.6],
        [16.0, 16.2, 15.8],
        [6.9, 7.0, 6.8],
        [6.5, 6.6, 6.4]
    ],
    "risk": ["Low", "Medium", "Medium", "Low", "Medium", "Medium",
             "Low", "High", "High", "High", "High", "Low", "Low"]
})

# Feature engineering
train_data["mean_val"] = train_data["lab_values"].apply(lambda x: np.mean(x) if x else 0)
train_data["std_val"] = train_data["lab_values"].apply(lambda x: np.std(x) if x else 0)
train_data["num_vals"] = train_data["lab_values"].apply(lambda x: len(x) if x else 0)
train_data["risk_lbl"] = train_data["risk"].map({"Low": 0, "Medium": 1, "High": 2})

# Text vectorization
vectorizer = TfidfVectorizer(lowercase=True, stop_words='english', max_features=1000, ngram_range=(1,2))
X_text = vectorizer.fit_transform(train_data["notes"])

# Numeric features
X_num = csr_matrix(train_data[["mean_val","std_val","num_vals"]].values)

# Combine features
X = hstack([X_text, X_num])
y = train_data["risk_lbl"]

# Train model
model = RandomForestClassifier(n_estimators=100, class_weight='balanced', random_state=42)
model.fit(X, y)

# Cross-validation
skf = StratifiedKFold(n_splits=3)
scores = cross_val_score(model, X, y, cv=skf)
print(f"Stratified CV Accuracy: {scores.mean():.2f} ± {scores.std():.2f}")

# Save model and vectorizer
joblib.dump(model, "ml_model/model.pkl")
joblib.dump(vectorizer, "ml_model/vectorizer.pkl")
print("Model and vectorizer saved to 'ml_model/'")
package com.example.medical.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "medical_records")
public class MedicalRecord {
    @Id
    private String id;
    private Long pacientId;
    private String diagnosis;
    private String treatmentPlan;
    private String notes;
    private LocalDateTime createdAt;
    private List<LabResult> labResults = new ArrayList<>();
    private List<MedicalImage> medicalImages = new ArrayList<>();
      public Long getPacientId() {
        return pacientId;
    }
    public void setPacientId(Long pacientId) {
        this.pacientId = pacientId;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getDiagnosis() {
        return diagnosis;
    }
    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }
    public String getTreatmentPlan() {
        return treatmentPlan;
    }
    public void setTreatmentPlan(String treatmentPlan) {
        this.treatmentPlan = treatmentPlan;
    }
    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    public List<LabResult> getLabResults() {
        return labResults;
    }
    public void setLabResults(List<LabResult> labResults) {
        this.labResults = labResults;
    }
    public List<MedicalImage> getMedicalImages() {
        return medicalImages;
    }
    public void setMedicalImages(List<MedicalImage> medicalImages) {
        this.medicalImages = medicalImages;
    }

    // Getters and Setters
    // ... (omit for brevity)
}

package com.example.medical.model;

import java.time.LocalDate;

public class LabResult {
    private String testType;
    private String resultValue;
    private LocalDate resultDate;
    private Image image;

    public static class Image {
        private String fileUrl;
        private String description;
        private LocalDate uploadedAt;
        // Getters and Setters
        // ...
        public String getFileUrl() {
            return fileUrl;
        }
        public void setFileUrl(String fileUrl) {
            this.fileUrl = fileUrl;
        }
        public String getDescription() {
            return description;
        }
        public void setDescription(String description) {
            this.description = description;
        }
        public LocalDate getUploadedAt() {
            return uploadedAt;
        }
        public void setUploadedAt(LocalDate uploadedAt) {
            this.uploadedAt = uploadedAt;
        }
    }
    // Getters and Setters
    // ...

    public String getTestType() {
        return testType;
    }

    public void setTestType(String testType) {
        this.testType = testType;
    }

    public String getResultValue() {
        return resultValue;
    }

    public void setResultValue(String resultValue) {
        this.resultValue = resultValue;
    }

    public LocalDate getResultDate() {
        return resultDate;
    }

    public void setResultDate(LocalDate resultDate) {
        this.resultDate = resultDate;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }
}
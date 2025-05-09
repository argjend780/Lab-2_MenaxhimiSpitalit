package com.example.medical.model;

import java.time.LocalDateTime;

public class MedicalImage {
    private String imageType;
    private String fileUrl;
    private LocalDateTime uploadedAt;
    // Getters and Setters
    // ...
    public String getImageType() {
        return imageType;
    }
    public void setImageType(String imageType) {
        this.imageType = imageType;
    }
    public String getFileUrl() {
        return fileUrl;
    }
    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }
    public LocalDateTime getUploadedAt() {
        return uploadedAt;
    }
    public void setUploadedAt(LocalDateTime uploadedAt) {
        this.uploadedAt = uploadedAt;
    }
}

package org.meanxhimispitalit.menaxhimispitalit.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentRequest {
    private Long patientId;
    private Long doctorId;
    private LocalDate date;
    private LocalTime time;

    // Getters & Setters
    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }
}

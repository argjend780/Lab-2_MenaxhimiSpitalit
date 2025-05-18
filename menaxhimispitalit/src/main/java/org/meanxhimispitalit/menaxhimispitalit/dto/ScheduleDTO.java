package org.meanxhimispitalit.menaxhimispitalit.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class ScheduleDTO {
    private Long id;
    private LocalDate date;
    private LocalTime time;
    private boolean available;

    public ScheduleDTO(Long id, LocalDate date, LocalTime time, boolean available) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.available = available;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public LocalTime getTime() { return time; }
    public void setTime(LocalTime time) { this.time = time; }

    public boolean isAvailable() { return available; }
    public void setAvailable(boolean available) { this.available = available; }
}
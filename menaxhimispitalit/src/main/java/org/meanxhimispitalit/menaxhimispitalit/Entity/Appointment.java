package org.meanxhimispitalit.menaxhimispitalit.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.List;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;
import java.util.List;

@Entity
@Table(name = "appointment")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pacienti_id", nullable = false)
    private Pacienti pacienti;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "mjek_id", nullable = false)
    private Mjeket mjek;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "time", nullable = false)
    private LocalTime time;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Pacienti getPacienti() { return pacienti; }
    public void setPacienti(Pacienti pacienti) { this.pacienti = pacienti; }

    public Mjeket getMjek() { return mjek; }
    public void setMjek(Mjeket mjek) { this.mjek = mjek; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public LocalTime getTime() { return time; }
    public void setTime(LocalTime time) { this.time = time; }
}

package org.meanxhimispitalit.menaxhimispitalit.Entity;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.lookup.PlanningId;
import ai.timefold.solver.core.api.domain.variable.PlanningVariable;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;


@Entity
@PlanningEntity
@Table(name = "appointment")
public class Appointment {
    @PlanningId
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @PlanningVariable(valueRangeProviderRefs = {"roomRange"})
    @ManyToOne
    private Room room;

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

    public Room getRoom() { return room; }
    public void setRoom(Room room) { this.room = room; }
}

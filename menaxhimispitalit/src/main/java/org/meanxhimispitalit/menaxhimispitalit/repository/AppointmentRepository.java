package org.meanxhimispitalit.menaxhimispitalit.repository;


import org.meanxhimispitalit.menaxhimispitalit.Entity.Appointment;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Mjeket;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Pacienti;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.time.LocalTime;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    boolean existsByMjekAndDateAndTime(Mjeket mjek, LocalDate date, LocalTime time);
    boolean existsByPacientiAndDateAndTime(Pacienti pacienti, LocalDate date, LocalTime time);
}

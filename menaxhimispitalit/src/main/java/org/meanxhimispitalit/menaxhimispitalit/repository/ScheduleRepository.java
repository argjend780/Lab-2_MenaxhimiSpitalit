package org.meanxhimispitalit.menaxhimispitalit.repository;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Mjeket;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    Optional<Schedule> findByDoctorAndDateAndTime(Mjeket doctor, LocalDate date, LocalTime time);
    List<Schedule> findByDoctorAndDateAndAvailableTrue(Mjeket doctor, LocalDate date);
    
    // SHTO KËTË: përdoret për të mos krijuar orare të përsëritura
    boolean existsByDoctorAndDateAndTime(Mjeket doctor, LocalDate date, LocalTime time);
}
package org.meanxhimispitalit.menaxhimispitalit.repository;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Mjeket;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Schedule;
import org.meanxhimispitalit.menaxhimispitalit.dto.ScheduleDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    Optional<Schedule> findByDoctorAndDateAndTime(Mjeket doctor, LocalDate date, LocalTime time);
    List<Schedule> findByDoctorAndDateAndAvailableTrue(Mjeket doctor, LocalDate date);
    
    // SHTO KËTË: përdoret për të mos krijuar orare të përsëritura
    boolean existsByDoctorAndDateAndTime(Mjeket doctor, LocalDate date, LocalTime time);

    @Query("SELECT DISTINCT s.date FROM Schedule s WHERE s.doctor.id = :doctorId AND s.available = true")
    List<LocalDate> findDistinctAvailableDatesByDoctor(@Param("doctorId") Long doctorId);

    @Query("SELECT new org.meanxhimispitalit.menaxhimispitalit.dto.ScheduleDTO(s.id, s.date, s.time, s.available) " +
            "FROM Schedule s WHERE s.doctor.id = :doctorId AND s.date = :date AND s.available = true")
    List<ScheduleDTO> findAvailableHoursByDoctorAndDate(@Param("doctorId") Long doctorId, @Param("date") LocalDate date);
}
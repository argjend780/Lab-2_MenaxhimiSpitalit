package org.meanxhimispitalit.menaxhimispitalit.service;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Mjeket;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Schedule;
import org.meanxhimispitalit.menaxhimispitalit.dto.ScheduleDTO;
import org.meanxhimispitalit.menaxhimispitalit.repository.MjeketRepository;
import org.meanxhimispitalit.menaxhimispitalit.repository.ScheduleRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class ScheduleService {

    private final ScheduleRepository scheduleRepository;
    private final MjeketRepository mjeketRepository;

    public ScheduleService(ScheduleRepository scheduleRepository, MjeketRepository mjeketRepository) {
        this.scheduleRepository = scheduleRepository;
        this.mjeketRepository = mjeketRepository;
    }

    public void generateSchedulesForAllDoctors(LocalDate startDate, LocalDate endDate) {
        List<Mjeket> allDoctors = mjeketRepository.findAll();

        for (Mjeket doctor : allDoctors) {
            for (LocalDate date = startDate; !date.isAfter(endDate); date = date.plusDays(1)) {
                for (int hour = 9; hour <= 17; hour++) {
                    LocalTime time = LocalTime.of(hour, 0);
                    boolean exists = scheduleRepository.existsByDoctorAndDateAndTime(doctor, date, time);
                    if (!exists) {
                        Schedule schedule = new Schedule();
                        schedule.setDoctor(doctor);
                        schedule.setDate(date);
                        schedule.setTime(time);
                        schedule.setAvailable(true);
                        scheduleRepository.save(schedule);
                    }
                }
            }
        }
    }
    public void generateScheduleForDoctorIfNotExists(Mjeket doctor, LocalDate start, LocalDate end) {
        for (LocalDate date = start; !date.isAfter(end); date = date.plusDays(1)) {
            for (int hour = 9; hour <= 17; hour++) {
                LocalTime time = LocalTime.of(hour, 0);
                boolean exists = scheduleRepository.existsByDoctorAndDateAndTime(doctor, date, time);
                if (!exists) {
                    Schedule schedule = new Schedule();
                    schedule.setDoctor(doctor);
                    schedule.setDate(date);
                    schedule.setTime(time);
                    schedule.setAvailable(true);
                    scheduleRepository.save(schedule);
                }
            }
        }
    }
   
    @Scheduled(cron = "0 0 2 * * *")
    public void generateSchedulesNightly() {
        LocalDate today = LocalDate.now();
        LocalDate weekLater = today.plusDays(7);
        generateSchedulesForAllDoctors(today, weekLater);
    }

    public List<LocalDate> getAvailableDatesByDoctor(Long doctorId) {
        return scheduleRepository.findDistinctAvailableDatesByDoctor(doctorId);
    }
    public List<ScheduleDTO> getAvailableHoursByDoctorAndDate(Long doctorId, LocalDate date) {
        return scheduleRepository.findAvailableHoursByDoctorAndDate(doctorId, date);
    }
}
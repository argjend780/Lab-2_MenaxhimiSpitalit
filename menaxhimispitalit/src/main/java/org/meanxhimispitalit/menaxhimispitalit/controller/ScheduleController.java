package org.meanxhimispitalit.menaxhimispitalit.controller;
import org.meanxhimispitalit.menaxhimispitalit.dto.ScheduleDTO;
import org.meanxhimispitalit.menaxhimispitalit.service.ScheduleService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {

    private final ScheduleService scheduleService;

    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }


    @GetMapping("/available/dates/by-doctor/{doctorId}")
    public List<LocalDate> getAvailableDatesForDoctor(@PathVariable Long doctorId) {
        return scheduleService.getAvailableDatesByDoctor(doctorId);
    }

    @GetMapping("/available/hours/by-doctor/{doctorId}")
    public List<ScheduleDTO> getAvailableHoursForDoctorOnDate(
            @PathVariable Long doctorId,
            @RequestParam("date") LocalDate date) {
        return scheduleService.getAvailableHoursByDoctorAndDate(doctorId, date);
    }
}
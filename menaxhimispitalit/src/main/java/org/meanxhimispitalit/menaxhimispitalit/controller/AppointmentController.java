package org.meanxhimispitalit.menaxhimispitalit.controller;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Appointment;
import org.meanxhimispitalit.menaxhimispitalit.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;


@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    private final AppointmentService appointmentService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    // Krijimi i një takimi me dhomë të caktuar nga AI
    @PostMapping("/book")
    public ResponseEntity<Appointment> bookAppointment(@RequestParam Long patientId,
                                                       @RequestParam Long doctorId,
                                                       @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
                                                       @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) LocalTime time) {
        Appointment appointment = appointmentService.bookAppointmentByIdWithRoom(patientId, doctorId, date, time);
        return ResponseEntity.ok(appointment);
    }

}

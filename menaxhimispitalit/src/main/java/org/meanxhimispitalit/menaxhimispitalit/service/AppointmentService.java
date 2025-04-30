package org.meanxhimispitalit.menaxhimispitalit.service;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Appointment;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Schedule;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Mjeket;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Pacienti;
import org.meanxhimispitalit.menaxhimispitalit.repository.AppointmentRepository;
import org.meanxhimispitalit.menaxhimispitalit.repository.ScheduleRepository;
import org.meanxhimispitalit.menaxhimispitalit.repository.MjeketRepository;
import org.meanxhimispitalit.menaxhimispitalit.repository.PacientiRepository;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepo;
    private final ScheduleRepository scheduleRepo;
    private final MjeketRepository mjeketRepo;
    private final PacientiRepository pacientiRepo;

    public AppointmentService(AppointmentRepository appointmentRepo,
                              ScheduleRepository scheduleRepo,
                              MjeketRepository mjeketRepo,
                              PacientiRepository pacientiRepo) {
        this.appointmentRepo = appointmentRepo;
        this.scheduleRepo = scheduleRepo;
        this.mjeketRepo = mjeketRepo;
        this.pacientiRepo = pacientiRepo;
    }

    @Transactional
    public Appointment bookAppointment(Pacienti patient, Mjeket doctor, LocalDate date, LocalTime time) {
        if (appointmentRepo.existsByMjekAndDateAndTime(doctor, date, time)) {
            throw new IllegalStateException("Mjeku ka takim në këtë orar.");
        }
        if (appointmentRepo.existsByPacientiAndDateAndTime(patient, date, time)) {
            throw new IllegalStateException("Pacienti ka një takim tjetër në këtë orar.");
        }

        Schedule schedule = scheduleRepo.findByDoctorAndDateAndTime(doctor, date, time)
                .orElseThrow(() -> new IllegalStateException("Orari nuk ekziston."));

        if (!schedule.isAvailable()) {
            throw new IllegalStateException("Orari është i zënë.");
        }

        schedule.setAvailable(false);
        scheduleRepo.save(schedule);

        Appointment appointment = new Appointment();
        appointment.setMjek(doctor);
        appointment.setPacienti(patient);
        appointment.setDate(date);
        appointment.setTime(time);
        return appointmentRepo.save(appointment);
    }

    public List<Schedule> getAvailableSlots(Mjeket doctor, LocalDate date) {
        return scheduleRepo.findByDoctorAndDateAndAvailableTrue(doctor, date);
    }

    public Appointment bookAppointmentById(Long patientId, Long doctorId, LocalDate date, LocalTime time) {
        Mjeket mjeku = mjeketRepo.findById(doctorId)
                .orElseThrow(() -> new IllegalStateException("Mjeku nuk ekziston."));
        Pacienti pacienti = pacientiRepo.findById(patientId)
                .orElseThrow(() -> new IllegalStateException("Pacienti nuk ekziston."));

        return bookAppointment(pacienti, mjeku, date, time);
    }
}

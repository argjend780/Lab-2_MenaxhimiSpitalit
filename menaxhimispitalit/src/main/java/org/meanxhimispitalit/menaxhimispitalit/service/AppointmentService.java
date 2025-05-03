package org.meanxhimispitalit.menaxhimispitalit.service;

import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import jakarta.transaction.Transactional;
import org.meanxhimispitalit.menaxhimispitalit.Entity.*;
import org.meanxhimispitalit.menaxhimispitalit.repository.*;
import org.meanxhimispitalit.menaxhimispitalit.solver.RoomAssignmentSolution;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;


@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepo;
    private final ScheduleRepository scheduleRepo;
    private final MjeketRepository mjeketRepo;
    private final PacientiRepository pacientiRepo;
    private final RoomRepository roomRepo;
    private final SolverFactory<RoomAssignmentSolution> solverFactory;

    public AppointmentService(AppointmentRepository appointmentRepo,
                              ScheduleRepository scheduleRepo,
                              MjeketRepository mjeketRepo,
                              PacientiRepository pacientiRepo,
                              RoomRepository roomRepo,
                              SolverFactory<RoomAssignmentSolution> solverFactory) {
        this.appointmentRepo = appointmentRepo;
        this.scheduleRepo = scheduleRepo;
        this.mjeketRepo = mjeketRepo;
        this.pacientiRepo = pacientiRepo;
        this.roomRepo = roomRepo;
        this.solverFactory = solverFactory;
    }

    @Transactional
    public Appointment bookAppointmentWithRoom(Pacienti patient, Mjeket doctor,
                                               LocalDate date, LocalTime time) {

        if (appointmentRepo.existsByMjekAndDateAndTime(doctor, date, time)) {
            throw new IllegalStateException("Mjeku ka takim ne kete orar.");
        }
        if (appointmentRepo.existsByPacientiAndDateAndTime(patient, date, time)) {
            throw new IllegalStateException("Pacienti ka nje takim tjeter ne kete orar.");
        }
        Schedule schedule = scheduleRepo.findByDoctorAndDateAndTime(doctor, date, time)
                .orElseThrow(() -> new IllegalStateException("Orari nuk ekziston."));
        if (!schedule.isAvailable()) {
            throw new IllegalStateException("Orari eshte i zene.");
        }
        schedule.setAvailable(false);
        scheduleRepo.save(schedule);


        Appointment newAppointment = new Appointment();
        newAppointment.setMjek(doctor);
        newAppointment.setPacienti(patient);
        newAppointment.setDate(date);
        newAppointment.setTime(time);
        Appointment savedAppointment = appointmentRepo.save(newAppointment);


        List<Appointment> slotAppointments =
                appointmentRepo.findByDateAndTime(date, time);


        Set<String> occupiedRoomNames = slotAppointments.stream()
                .map(a -> a.getRoom() != null ? a.getRoom().getName() : null)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());


        List<Room> availableRooms = roomRepo.findAvailableRooms(occupiedRoomNames);
        if (availableRooms.isEmpty()) {
            throw new IllegalStateException("Nuk ka dhoma te lira ne kete orar.");
        }


        RoomAssignmentSolution problem =
                new RoomAssignmentSolution(availableRooms, slotAppointments);
        Solver<RoomAssignmentSolution> solver = solverFactory.buildSolver();
        RoomAssignmentSolution solution = solver.solve(problem);

        Appointment solved = solution.getAppointments().stream()
                .filter(a -> a.getId().equals(savedAppointment.getId()))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException(
                        "Nuk u gjet rezultati per termin."));

        savedAppointment.setRoom(solved.getRoom());
        return appointmentRepo.save(savedAppointment);
    }


    public Appointment bookAppointmentByIdWithRoom(Long patientId, Long doctorId, LocalDate date, LocalTime time) {
        Mjeket doctor = mjeketRepo.findById(doctorId)
                .orElseThrow(() -> new IllegalStateException("Mjeku nuk ekziston."));
        Pacienti patient = pacientiRepo.findById(patientId)
                .orElseThrow(() -> new IllegalStateException("Pacienti nuk ekziston."));
        return bookAppointmentWithRoom(patient, doctor, date, time);
    }
}
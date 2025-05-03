package org.meanxhimispitalit.menaxhimispitalit.solver;

import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Appointment;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Room;

import java.util.List;

@PlanningSolution
public class RoomAssignmentSolution {

    @ValueRangeProvider(id = "roomRange")
    @ProblemFactCollectionProperty
    private List<Room> rooms;

    @PlanningEntityCollectionProperty
    private List<Appointment> appointments;

    @PlanningScore
    private HardSoftScore score;

    public RoomAssignmentSolution() {}

    public RoomAssignmentSolution(List<Room> rooms, List<Appointment> appointments) {
        this.rooms = rooms;
        this.appointments = appointments;
    }

    public List<Room> getRooms() { return rooms; }
    public void setRooms(List<Room> rooms) { this.rooms = rooms; }

    public List<Appointment> getAppointments() { return appointments; }
    public void setAppointments(List<Appointment> appointments) { this.appointments = appointments; }

    public HardSoftScore getScore() { return score; }
    public void setScore(HardSoftScore score) { this.score = score; }
}

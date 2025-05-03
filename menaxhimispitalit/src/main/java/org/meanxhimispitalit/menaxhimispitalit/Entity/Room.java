package org.meanxhimispitalit.menaxhimispitalit.Entity;

import ai.timefold.solver.core.api.domain.lookup.PlanningId;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Room {
    @PlanningId
    @Id
    private String name;

    public Room() {}
    public Room(String name) {
        this.name = name;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

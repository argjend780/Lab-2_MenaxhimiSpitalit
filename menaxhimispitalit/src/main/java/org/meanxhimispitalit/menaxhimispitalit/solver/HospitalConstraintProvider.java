package org.meanxhimispitalit.menaxhimispitalit.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Appointment;


public class HospitalConstraintProvider implements ConstraintProvider {

    @Override
    public Constraint[] defineConstraints(ConstraintFactory factory) {
        return new Constraint[] {
                factory.forEachUniquePair(Appointment.class,
                                Joiners.equal(Appointment::getRoom),
                                Joiners.equal(Appointment::getDate),
                                Joiners.equal(Appointment::getTime))
                        .penalize(HardSoftScore.ONE_HARD)
                        .asConstraint("Room conflict")
        };
    }
}

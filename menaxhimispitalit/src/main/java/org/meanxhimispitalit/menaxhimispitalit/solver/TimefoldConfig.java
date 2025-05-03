package org.meanxhimispitalit.menaxhimispitalit.solver;

import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.core.config.solver.SolverConfig;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Appointment;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Duration;

@Configuration
public class TimefoldConfig {

    @Bean
    public SolverFactory<RoomAssignmentSolution> solverFactory() {
        SolverConfig solverConfig = new SolverConfig()
                .withSolutionClass(RoomAssignmentSolution.class)
                .withEntityClasses(Appointment.class)
                .withConstraintProviderClass(HospitalConstraintProvider.class)
                .withTerminationSpentLimit(Duration.ofSeconds(5));

        return SolverFactory.create(solverConfig);
    }
}

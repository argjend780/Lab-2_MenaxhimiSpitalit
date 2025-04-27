package org.meanxhimispitalit.menaxhimispitalit.repository;

import java.util.Optional;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Reparti;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepartiRepository extends JpaRepository<Reparti, Long> {
    Optional<Reparti> findById(Long id);
}

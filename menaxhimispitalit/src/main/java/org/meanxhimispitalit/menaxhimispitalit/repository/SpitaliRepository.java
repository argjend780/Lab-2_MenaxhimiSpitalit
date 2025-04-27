package org.meanxhimispitalit.menaxhimispitalit.repository;

import java.util.Optional;


import org.meanxhimispitalit.menaxhimispitalit.Entity.Spitali;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpitaliRepository extends JpaRepository<Spitali, Long>{
	 Optional<Spitali> findById(Long id);
}

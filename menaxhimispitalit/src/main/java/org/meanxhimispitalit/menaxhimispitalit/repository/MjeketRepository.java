package org.meanxhimispitalit.menaxhimispitalit.repository;

import java.util.Optional;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Mjeket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MjeketRepository extends JpaRepository<Mjeket, Long>{
	 Optional<Mjeket> findById(Long id);
}

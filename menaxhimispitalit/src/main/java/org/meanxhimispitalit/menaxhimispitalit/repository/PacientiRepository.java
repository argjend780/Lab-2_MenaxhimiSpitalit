package org.meanxhimispitalit.menaxhimispitalit.repository;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Pacienti;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PacientiRepository extends JpaRepository<Pacienti, Long>{
	List<Pacienti> findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(String name, String email);
	
}

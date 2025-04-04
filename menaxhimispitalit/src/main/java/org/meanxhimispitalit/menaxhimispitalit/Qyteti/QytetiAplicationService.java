package org.meanxhimispitalit.menaxhimispitalit.Qyteti;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@Service
public class QytetiAplicationService implements QytetiService {
    
   private final QytetiRepository qytetiRepository;

   public QytetiAplicationService(QytetiRepository qytetiRepository) {
       this.qytetiRepository = qytetiRepository;
   }

    @Override
    public QytetiEntity createQyteti(QytetiEntity qytetiEntity) {
        return qytetiRepository.save(qytetiEntity);
    }
    @Override
    public QytetiEntity getQytetiById(Long id) {
        return qytetiRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Qyteti "+id +"not found")
        ); 
    }
    @Override
    public List<QytetiEntity> getAllQytetet() {
        return qytetiRepository.findAll();
    }
    @Override
    public void deleteQyteti(Long id) {
        if (!qytetiRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Qyteti "+id +"not found");
        }
        qytetiRepository.deleteById(id);
    }
}

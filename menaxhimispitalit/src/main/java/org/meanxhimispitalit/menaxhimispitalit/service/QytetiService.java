package org.meanxhimispitalit.menaxhimispitalit.service;

import java.util.List;
import java.util.Optional;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Qyteti;

import org.meanxhimispitalit.menaxhimispitalit.repository.QytetiRepository;
import org.springframework.beans.factory.annotation.Autowired;




import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class QytetiService {

    private final QytetiRepository qytetiRepository;

    public QytetiService(@Autowired QytetiRepository qytetiRepository) {
        this.qytetiRepository = qytetiRepository;
    } 

    public Qyteti createQyteti(Qyteti qyteti) {
        return qytetiRepository.save(qyteti);
    }

    public Qyteti findById(Long id) {
        return qytetiRepository.findById(id).orElseThrow(() -> new RuntimeException("Qyteti not found"));
    }

    public List<Qyteti> getAllQytetet() {
        return qytetiRepository.findAll();
    }

    public ResponseEntity<?> deleteQytetiById(Long id) {
        Qyteti qyteti = qytetiRepository.findById(id).orElseThrow(() -> new RuntimeException("Qyteti not found"));
        qytetiRepository.delete(qyteti);
        String message = "Qyteti with ID " + id + " has been deleted";
        return ResponseEntity.ok().body(message);
    }
}

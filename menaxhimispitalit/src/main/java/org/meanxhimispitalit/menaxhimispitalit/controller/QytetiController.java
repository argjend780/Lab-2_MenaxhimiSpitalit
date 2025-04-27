package org.meanxhimispitalit.menaxhimispitalit.controller;


import java.util.List;


import org.meanxhimispitalit.menaxhimispitalit.Entity.Qyteti;
import org.meanxhimispitalit.menaxhimispitalit.service.QytetiService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;



@Controller
@RequestMapping("/api/qyteti")
@CrossOrigin
public class QytetiController {

  private final QytetiService qytetiService;
  

    public QytetiController(QytetiService qytetiService) {
        this.qytetiService = qytetiService;
        
    }

    @PostMapping
    public ResponseEntity<?> createQyteti(@RequestBody Qyteti qyteti) {
     
    
      
        Qyteti createdQyteti = qytetiService.createQyteti(qyteti);
        return new ResponseEntity<>(createdQyteti, HttpStatus.OK);
    }

    // Get Qyteti by id
    @GetMapping("/{id}")
    public ResponseEntity<Qyteti> getQytetiById(@PathVariable Long id) {
        Qyteti foundQyteti = qytetiService.findById(id);
        if (foundQyteti != null) {
            return ResponseEntity.ok(foundQyteti);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
   
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQyteti(@PathVariable Long id,@RequestHeader("Authorization") String token) {
        return qytetiService.deleteQytetiById(id);
    }

    // Get all Qytetet
    @GetMapping("/all")
    public ResponseEntity<List<Qyteti>> getAllQytetet() {
        List<Qyteti> qytetiList = qytetiService.getAllQytetet();
        return ResponseEntity.ok(qytetiList);
    }
}

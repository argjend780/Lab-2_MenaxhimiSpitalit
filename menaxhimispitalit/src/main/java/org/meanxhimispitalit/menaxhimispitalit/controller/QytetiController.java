package org.meanxhimispitalit.menaxhimispitalit.controller;


import java.util.List;


import org.meanxhimispitalit.menaxhimispitalit.Entity.Qyteti;
import org.meanxhimispitalit.menaxhimispitalit.service.QytetiService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collections;
import java.util.Map;


import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/qyteti")
@CrossOrigin
public class QytetiController {

  private final QytetiService qytetiService;
  

    public QytetiController(QytetiService qytetiService) {
        this.qytetiService = qytetiService;
        
    }

    //@PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> createQyteti(@RequestBody Qyteti qyteti) {
     
    
      
        Qyteti createdQyteti = qytetiService.createQyteti(qyteti);
        return new ResponseEntity<>(createdQyteti, HttpStatus.OK);
    }

    // Get Qyteti by id
    @GetMapping("/{id}")
    public ResponseEntity<Qyteti> getQytetiById(@PathVariable ("id") Long id) {
        Qyteti foundQyteti = qytetiService.findById(id);
        if (foundQyteti != null) {
            return ResponseEntity.ok(foundQyteti);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
   // @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQyteti(@PathVariable ("id") Long id) {
        return qytetiService.deleteQytetiById(id);
    }


    @GetMapping("/all")
    public ResponseEntity<List<Qyteti>> getAllQytetet() {
        List<Qyteti> qytetiList = qytetiService.getAllQytetet();
        return ResponseEntity.ok(qytetiList);
    }
   // @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/count")
    public Map<String, Long> getCityCount() {
    long count = qytetiService.countQyteti();
    return Collections.singletonMap("count", count);
    }
}

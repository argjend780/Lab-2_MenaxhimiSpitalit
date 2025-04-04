package org.meanxhimispitalit.menaxhimispitalit.Qyteti;


import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;


@RestController
public class QytetiController {
    
    private final QytetiService qytetiService;

    public QytetiController(QytetiService qytetiService) {
        this.qytetiService = qytetiService;
    }

    @PostMapping("/qyteti")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<QytetiEntity> createQyteti(@RequestBody QytetiEntity qytetiEntity) {
        return ResponseEntity.status(HttpStatus.CREATED).body(qytetiService.createQyteti(qytetiEntity));
        
    }
    @GetMapping("/qyteti/{id}")
    public QytetiEntity findById(@PathVariable(name = "id") Long id) {
        return qytetiService.getQytetiById(id);
    }
    @GetMapping("/qyteti")
    public List<QytetiEntity> getAllQytetet() {
        return qytetiService.getAllQytetet();
    }
    @DeleteMapping("/qyteti/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteQyteti(@PathVariable(name = "id") Long id) {
        qytetiService.deleteQyteti(id);
    }
}

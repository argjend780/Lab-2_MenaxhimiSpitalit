package org.meanxhimispitalit.menaxhimispitalit.controller;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Pacienti;
import org.meanxhimispitalit.menaxhimispitalit.service.PacientiService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/pacient")
@CrossOrigin
public class PacientiController {
	
	    private final PacientiService pacientService;
	   
	    
       public PacientiController(PacientiService pacientService) {
           this.pacientService = pacientService;
          
       }
	    @PreAuthorize("hasRole('ADMIN')")
	    @PostMapping(path="/add/{qytetiId}/{SpitaliID}/{repartiID}")
	    public ResponseEntity<?> createPacient(@PathVariable ("qytetiId") Long qytetiId,@PathVariable ("SpitaliID") Long SpitaliID,
	    		@PathVariable ("repartiID") Long repartiID,
	    		@RequestBody Pacienti pacient) {
			
                    Pacienti createdPacient = pacientService.createpacient(pacient, qytetiId, SpitaliID, repartiID);
                    return ResponseEntity.status(HttpStatus.CREATED).body(createdPacient);
                
	    }
	    @GetMapping(path = "/o/{qytetiId}/{spitaliId}/{repartiId}/{pacinetId}")
	    public Pacienti getPacientById(
	    		@PathVariable ("qytetiId") Long qytetiId, @PathVariable ("spitaliId") Long spitaliId,
	    		@PathVariable ("repartiId") Long repartiId,@PathVariable ("pacinetId") Long pacinetId) {
	        return pacientService.getPacient(qytetiId, spitaliId,repartiId,pacinetId);
	    }
	    @GetMapping(path = "/all/{qytetiId}/{spitaliId}/{repartiId}")
	    public List<Pacienti>getPacientList(@PathVariable ("qytetiId") Long qytetiId,@PathVariable ("spitaliId") Long spitaliId,@PathVariable ("repartiId") Long repartiId){
	    	return pacientService.getPacinetList(qytetiId,spitaliId,repartiId);
	    }
	    @PreAuthorize("hasRole('ADMIN')")
	    @DeleteMapping(path = "/delete/{departmentId}/{id}")
	    public ResponseEntity<?>deletePacientById(@PathVariable ("departmentId") Long departmentId, @PathVariable ("id") Long id){
			
	    	return pacientService.deletePacinetById(departmentId,id);
	    	
	    }
	    @PreAuthorize("hasRole('ADMIN')")
		@GetMapping("/count")
		public Map<String, Long> getPacinetCount() {
		long count = pacientService.countPacientet();
		return Collections.singletonMap("count", count);
		}
}


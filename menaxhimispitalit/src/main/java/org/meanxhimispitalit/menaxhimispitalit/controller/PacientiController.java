package org.meanxhimispitalit.menaxhimispitalit.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Pacienti;
import org.meanxhimispitalit.menaxhimispitalit.service.PacientiService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/pacient")
@CrossOrigin
public class PacientiController {
	
	    private final PacientiService pacientService;
	   
	    
       public PacientiController(PacientiService pacientService) {
           this.pacientService = pacientService;
          
       }
	
	    @PostMapping(path="/add/{qytetiId}/{SpitaliID}/{repartiID}")
	    public ResponseEntity<?> createPacient(@PathVariable ("qytetiId") Long qytetiId,@PathVariable ("SpitaliID") Long SpitaliID,
	    		@PathVariable ("repartiID") Long repartiID,
	    		@RequestBody Pacienti pacient) {
			
                    Pacienti createdPacient = pacientService.createpacient(pacient, qytetiId, SpitaliID, repartiID);
                    return ResponseEntity.status(HttpStatus.CREATED).body(createdPacient);
                
	    }
	    @GetMapping(path = "/o/{qytetiId}/{spitaliId}/{repartiId}/{pacinetId}")
	    public Pacienti getPacientById(
	    		@PathVariable Long qytetiId, @PathVariable Long spitaliId,
	    		@PathVariable Long repartiId,@PathVariable Long pacinetId) {
	        return pacientService.getPacient(qytetiId, spitaliId,repartiId,pacinetId);
	    }
	    @GetMapping(path = "/all/{qytetiId}/{spitaliId}/{repartiId}")
	    public List<Pacienti>getPacientList(@PathVariable Long qytetiId,@PathVariable Long spitaliId,@PathVariable Long repartiId){
	    	return pacientService.getPacinetList(qytetiId,spitaliId,repartiId);
	    }
		
	    @DeleteMapping(path = "/delete/{departmentId}/{id}")
	    public ResponseEntity<?>deletePacientById(@PathVariable Long departmentId, @PathVariable Long id){
			
	    	return pacientService.deletePacinetById(departmentId,id);
	    	
	    }
}


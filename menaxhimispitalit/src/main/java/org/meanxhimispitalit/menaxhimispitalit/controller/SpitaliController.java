package org.meanxhimispitalit.menaxhimispitalit.controller;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Spitali;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Reparti;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Qyteti;

import org.meanxhimispitalit.menaxhimispitalit.service.SpitaliService;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/spitalet")
@CrossOrigin
public class SpitaliController {

	
	private SpitaliService spitaliService;
    

    public SpitaliController(SpitaliService spitaliService) {
        this.spitaliService = spitaliService;
    }

	@PostMapping("/create/{departmentId}")
    public ResponseEntity<?> createOrUpdateSpitali(@RequestBody Spitali spitali, 
	                                                @PathVariable("departmentId") Long departmentId) {
	

        Spitali createdSpitali = spitaliService.teOrUpdateMjeket(spitali, departmentId);
	    return ResponseEntity.status(HttpStatus.CREATED).body(createdSpitali);
	}

    
    @GetMapping("/{spitaliId}")
    public ResponseEntity<Spitali> getSpitaliById(@PathVariable("spitaliId") long spitaliId) {
        Spitali spitalet = spitaliService.findById(spitaliId);
        if (spitalet != null) {
            return new ResponseEntity<>(spitalet, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/reparti/{repartiId}")
    public ResponseEntity<List<Spitali>> getSpitaletList(@PathVariable ("repartiId") long repartiId) {
        List<Spitali> spitaletList = spitaliService.getSpitaliList(repartiId);
        return new ResponseEntity<>(spitaletList, HttpStatus.OK);
    }
   
    @DeleteMapping("/delete/{repartiId}/{id}")
    public ResponseEntity<?> deleteSpitaliById(@PathVariable ("repartiId") Long repartiId, 
    		@PathVariable ("id") Long id) {
        return spitaliService.deleteMjeketById(repartiId, id);
    }

    @GetMapping("/get/{repartiId}/{mjeketID}")
    public ResponseEntity<Spitali> getSpitali(@PathVariable ("repartiId") Long  repartiId, @PathVariable ("mjeketID") Long mjeketID) {
        Spitali spitalet = spitaliService.getSpitali(repartiId, mjeketID);
        return new ResponseEntity<>(spitalet, HttpStatus.OK);
    }
}

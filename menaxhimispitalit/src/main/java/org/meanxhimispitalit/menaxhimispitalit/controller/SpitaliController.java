package org.meanxhimispitalit.menaxhimispitalit.controller;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Spitali;
import org.meanxhimispitalit.menaxhimispitalit.service.SpitaliService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/spitalet")
@CrossOrigin
public class SpitaliController {

	
	private SpitaliService spitaliService;
    

    public SpitaliController(SpitaliService spitaliService) {
        this.spitaliService = spitaliService;
    }

    @PreAuthorize("hasRole('ADMIN')")
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

    @PreAuthorize("hasRole('ADMIN')")
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
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/count")
    public Map<String, Long> getCityCount() {
    long count = spitaliService.countSpitalet();
    return Collections.singletonMap("count", count);
    }
}

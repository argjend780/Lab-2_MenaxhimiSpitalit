package org.meanxhimispitalit.menaxhimispitalit.controller;


import org.meanxhimispitalit.menaxhimispitalit.Entity.Reparti;
import org.meanxhimispitalit.menaxhimispitalit.service.RepartiService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController
@RequestMapping("/repartet")
@CrossOrigin
public class RepartiController {

   
    private RepartiService repartiService;
  
    public RepartiController(RepartiService repartiService) {
        this.repartiService = repartiService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(path="/{qytetiId}/{spitaliId}")
	public ResponseEntity<?> addNewTask(@PathVariable("qytetiId") Long departmentId, 
			@PathVariable ("spitaliId") Long employeeId,
			@RequestBody Reparti newTask) {

		return new ResponseEntity<> (repartiService.createNewReparti(newTask,departmentId ,employeeId),  HttpStatus.CREATED);

	}

    @GetMapping("/list/{qytetiId}/{spitaliId}")
    public ResponseEntity<List<Reparti>> getRepartetList(@PathVariable ("qytetiId") Long departamentiId, @PathVariable ("spitaliId") Long employeeId) {
        List<Reparti> repartetList = repartiService.getTaskList(departamentiId, employeeId);
        return new ResponseEntity<>(repartetList, HttpStatus.OK);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{qytetiId}/{spitaliId}/{repartiId}")
    public ResponseEntity<?> deleteReparti(@PathVariable ("qytetiId") Long departmentId, 
    		@PathVariable ("spitaliId") Long employeeId,
    		@PathVariable ("repartiId") Long taskId) {
    	
        
        return repartiService.deleteTask(departmentId, employeeId, taskId);
    }

    @GetMapping("/get/{qytetiId}/{spitaliId}/{repartiId}")
    public ResponseEntity<Reparti> getReparti(@PathVariable ("qytetiId") Long departmentId, @PathVariable ("spitaliId") Long employeeId, @PathVariable ("repartiId") Long taskId) {
        Reparti reparti = repartiService.getTask(departmentId, employeeId, taskId);
        return new ResponseEntity<>(reparti, HttpStatus.OK);
    }
}

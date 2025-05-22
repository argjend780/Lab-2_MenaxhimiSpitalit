package org.meanxhimispitalit.menaxhimispitalit.service;

import java.util.List;



import org.meanxhimispitalit.menaxhimispitalit.Entity.Reparti;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Spitali;
import org.meanxhimispitalit.menaxhimispitalit.repository.RepartiRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;



@Service

public class RepartiService {
	

	    private final RepartiRepository repartiRepository;
	    private final SpitaliService spitaliservice;

        public RepartiService(RepartiRepository repartiRepository, SpitaliService spitaliservice) {
            this.repartiRepository = repartiRepository;
            this.spitaliservice = spitaliservice;
        }

	    public Reparti createNewReparti(Reparti newTask, Long departmentid, Long empoyeeid) {

			Spitali employee= spitaliservice.getSpitali(departmentid, empoyeeid);

			newTask.setSpitali(employee);

			return repartiRepository.save(newTask);

		}

	 

	    public List<Reparti> getTaskList(Long departamentiID, Long employeeID) {
			return spitaliservice.getSpitali(departamentiID, employeeID).getRepartet();
	    }

	    public ResponseEntity<?> deleteTask(Long departmentId, Long employeeId, Long taskId) {
	    	spitaliservice.getSpitali(departmentId, employeeId);
	        Reparti task = repartiRepository.findById(taskId)
	                .orElseThrow(() -> new RuntimeException("Task not found"));
	        if (task.getSpitali().getId() == employeeId) {
	            repartiRepository.delete(task);
	            return ResponseEntity.ok().body("Task with id " + taskId + " has been deleted");
	        }
	        throw new RuntimeException("Task not found");
	    }

	    public Reparti getTask(Long departmentId, Long employeeId, Long taskId) {
	    	spitaliservice.getSpitali(departmentId, employeeId);
	        Reparti task = repartiRepository.findById(taskId)
	                .orElseThrow(() -> new RuntimeException("Task not found"));
	        if (task.getSpitali().getId() == employeeId) {
	            return task;
	        }
	        throw new RuntimeException("Task not found");
	    }
	    public Reparti findById(Long id) {return repartiRepository.findById(id).orElse(null);}
	    
	    public Reparti getTask1(Long departmentId) {
	    	spitaliservice.getSpitali1(departmentId);
	        Reparti task = repartiRepository.findById(departmentId)
	                .orElseThrow(() -> new RuntimeException("Task not found"));
	        if (task.getSpitali().getId() == departmentId) {
	            return task;
	        }
	        throw new RuntimeException("Task not found");
	    }
	}


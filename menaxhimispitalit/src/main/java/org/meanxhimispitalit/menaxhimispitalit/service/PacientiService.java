package org.meanxhimispitalit.menaxhimispitalit.service;

import java.util.List;


import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Pacienti;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Reparti;
import org.meanxhimispitalit.menaxhimispitalit.repository.PacientiRepository;
import org.meanxhimispitalit.menaxhimispitalit.repository.RepartiRepository;



@Service

public class PacientiService {
	
	    private final PacientiRepository pacientetrepository;
	    private final RepartiService repartiservice;
        
	    
	    public PacientiService(PacientiRepository pacientetrepository, RepartiService repartiservice) {
            this.pacientetrepository = pacientetrepository;
           
            this.repartiservice = repartiservice;
        }
	   
	    public Pacienti createpacient(Pacienti pacient,Long qytetiId,Long spitaliid,Long repartiid)
	    {
	    	Reparti employee= repartiservice.getTask(qytetiId, spitaliid,repartiid);
	    	
	    	pacient.setReparti(employee);
	    	return pacientetrepository.save(pacient);
	    	}
	    public Pacienti findMyId(Long id) {return pacientetrepository.findById(id).orElse(null);}
	    
	    
	    
		public List<Pacienti> getPacinetList(Long qytetiId, Long spitaliId, Long repartiId) {
			List<Pacienti> pacientet = repartiservice.getTask(qytetiId, spitaliId, repartiId).getPacientiliste();

			if (pacientet == null || pacientet.isEmpty()) {
				throw new RuntimeException("Nuk u gjetën pacientë për këtë repart.");
			}

			return pacientet;
		}
	    /*public List<Pacienti> getPacinetList(Long qytetiId ,Long spitaliId,Long repartiId){	
	    	return repartiservice.getTask(qytetiId,spitaliId,repartiId).getPacientiliste();
	    	}
	    
	    /*public List<Pacienti> getMjeketList(Long repartiId){	
	    	return repartirepository.findById(repartiId).get().getPacientiliste();
	    	}
	    */
	    public ResponseEntity<?> deletePacinetById(Long repartiId ,Long id){Pacienti mjeket = findMyId(id);
	    if(mjeket != null){
	    	if(mjeket.getReparti().getId() == repartiId) {
	    	
	    		pacientetrepository.delete(mjeket);
	    String massage = "Employee with id:" + mjeket.getId()+ "has been deleted";
	    return ResponseEntity.ok().body(massage);
	    
	    	}
	    	else {String massage = "Employee was not found";
	        throw new RuntimeException(massage);
	    		
	    	}
	    }
	    else{String massage = "Employee was not found";
	         throw new RuntimeException(massage);
	      }
	    } 
	 
	    public Pacienti getPacient(Long qytetiId, Long spitaliId, Long repartiId,Long pacinetId) {
	    	repartiservice.getTask(qytetiId, spitaliId,pacinetId);
	        Pacienti task = pacientetrepository.findById(pacinetId)
	                .orElseThrow(() -> new RuntimeException("Task not found"));
	        if (task.getReparti().getId() == repartiId) {
	            return task;
	        }
	        throw new RuntimeException("Task not found");
	    }
	    
	    public Pacienti getPacinet(Long repartiId,Long pacinetID) {
	    	
	    	Pacienti pacinet = findMyId(pacinetID);
	    	
	    	  if(pacinet == null ||pacinet.getReparti().getId() != repartiId ) {
	    		  throw new RuntimeException("Employe not found ");
	    	  }
	    
	    	return pacinet;
	    }
		public Long countPacientet() {
        	return pacientetrepository.count();
    	}
		public List<Pacienti> searchPacientet(String keyword) {
			return pacientetrepository.findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(keyword, keyword);
		}
	}



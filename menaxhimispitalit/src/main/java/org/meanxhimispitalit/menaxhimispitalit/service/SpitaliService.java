package org.meanxhimispitalit.menaxhimispitalit.service;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Spitali;

import org.meanxhimispitalit.menaxhimispitalit.repository.SpitaliRepository;
import org.meanxhimispitalit.menaxhimispitalit.repository.QytetiRepository;



import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;



import java.util.List;

@Service

public class SpitaliService {
	

	    private final SpitaliRepository spitalirepository;
	    private final QytetiRepository qytetiRepository;
	    private final QytetiService qytetiService;

        public SpitaliService(SpitaliRepository spitalirepository, QytetiRepository qytetiRepository, QytetiService qytetiService) {
            this.spitalirepository = spitalirepository;
            this.qytetiRepository = qytetiRepository;
            this.qytetiService = qytetiService;
        }
	    
	   
	    public Spitali teOrUpdateMjeket(Spitali spitalet,long departmentId)
	    {
	    	spitalet.setQyteti(qytetiService.findById(departmentId));
	    	return spitalirepository.save(spitalet);
	    	}
	    

	    public Spitali findById(long id) {return spitalirepository.findById(id).orElse(null);}
	   
	    
	    public List<Spitali> getSpitaliList(long repartiId){	
	    	return qytetiRepository.findById(repartiId).get().getSpitalet();
	    	}
	    
	    public ResponseEntity<?> deleteMjeketById(long repartiId ,long id){Spitali spitalet = findById(id);
	    if(spitalet != null){
	    	if(spitalet.getQyteti().getId() == repartiId) {
	    	
	    		spitalirepository.delete(spitalet);
	    String massage = "Employee with id:" + spitalet.getId()+ "has been deleted";
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
	 
	    public Spitali getSpitali(Long repartiId,Long mjeketID) {
	    	
	    	Spitali spitalet = findById(mjeketID);
	    	
	    	  if(spitalet == null ||spitalet.getQyteti().getId() != repartiId ) {
	    		  throw new RuntimeException("Employe not found ");
	    	  }
	    
	    	return spitalet;
	    }
	    
	    public Spitali getSpitali1(Long repartiId) {
	    	
	    	Spitali spitalet = findById(repartiId);
	    	
	    	  if(spitalet == null ||spitalet.getQyteti().getId() != repartiId ) {
	    		  throw new RuntimeException("Employe not found ");
	    	  }
	    
	    	return spitalet;
	    }
		public Long countSpitalet() {
        return spitalirepository.count();
    }
	}




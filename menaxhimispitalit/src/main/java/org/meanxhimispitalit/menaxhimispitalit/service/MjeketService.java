package org.meanxhimispitalit.menaxhimispitalit.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import org.meanxhimispitalit.menaxhimispitalit.Entity.Mjeket;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Reparti; 
import org.meanxhimispitalit.menaxhimispitalit.repository.MjeketRepository;
import org.meanxhimispitalit.menaxhimispitalit.repository.RepartiRepository;
import org.meanxhimispitalit.menaxhimispitalit.service.RepartiService;





@Service
public class MjeketService {

    private final MjeketRepository mjeketrepository;
    private final RepartiRepository repartirepository;
    private final RepartiService repartiservice;
    private final ScheduleService scheduleService;

    public MjeketService(MjeketRepository mjeketrepository, RepartiRepository repartirepository,
                         RepartiService repartiservice, ScheduleService scheduleService) {
        this.mjeketrepository = mjeketrepository;
        this.repartirepository = repartirepository;
        this.repartiservice = repartiservice;
        this.scheduleService = scheduleService;
    }
   /* @Autowired
    private UserClient userClient;

    public UserResponse getUserById(Long id) {
        ResponseEntity<UserResponse> userResponse = userClient.getUserById(id);
        return userResponse.getBody();
    }
    public List<UserResponse> getAllUsers() {
        ResponseEntity <List<UserResponse>> userResponse = userClient.getAllUsers();
        return userResponse.getBody();
    }*/
    
   /* public String checkAdmin(String token) {
        ResponseEntity<String> response = userclient.checkAdmin(token);
        return response.getBody();
    }*/

    
    public Mjeket teOrUpdateMjeket(Mjeket mjeket, Long qytetiId, Long spitaliid, Long repartiid) {
    Reparti employee = repartiservice.getTask(qytetiId, spitaliid, repartiid);
    mjeket.setReparti(employee);

    Mjeket savedMjek = mjeketrepository.save(mjeket);

    // ✅ Gjenero orarin vetëm nëse është i ri ose nuk ka orare për ditët në vijim
    LocalDate today = LocalDate.now();
    LocalDate weekLater = today.plusDays(7);
    scheduleService.generateScheduleForDoctorIfNotExists(savedMjek, today, weekLater);

    return savedMjek;
}

    public Mjeket findMyId(Long id) {return mjeketrepository.findById(id).orElse(null);}
   
    
    public List<Mjeket> getMjeketList(Long qytetiId ,Long spitaliId,Long repartiId){	
    	return repartiservice.getTask(qytetiId,spitaliId,repartiId).getMjeketliste();
    	}
    
    public ResponseEntity<?> deleteMjeketById(Long repartiId ,Long id){Mjeket mjeket = findMyId(id);
    if(mjeket != null){
    	if(mjeket.getReparti().getId() == repartiId) {
    	
    		mjeketrepository.delete(mjeket);
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
    
 
    public Mjeket getMjeket(Long repartiId,Long mjeketID) {
    	
    	Mjeket mjeket = findMyId(mjeketID);
    	
    	  if(mjeket == null ||mjeket.getReparti().getId() != repartiId ) {
    		  throw new RuntimeException("Employe not found ");
    	  }
    
    	return mjeket;
    }


public Mjeket getMjke(Long qytetiId, Long spitaliId, Long repartiId,Long mjekuId) {
	repartiservice.getTask(qytetiId, spitaliId,mjekuId);
    Mjeket task = mjeketrepository.findById(mjekuId)
            .orElseThrow(() -> new RuntimeException("Task not found"));
    if (task.getReparti().getId() == repartiId) {
        return task;
    }
    throw new RuntimeException("Task not found");
}


}


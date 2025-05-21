package org.meanxhimispitalit.menaxhimispitalit.controller;


import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.meanxhimispitalit.menaxhimispitalit.Entity.Mjeket;
import org.meanxhimispitalit.menaxhimispitalit.service.MjeketService;




@RestController
@RequestMapping("/mjeket")
@CrossOrigin(origins = "http://localhost:3000")
public class MjeketController {

    private final MjeketService mjeketService;
  
    public MjeketController(MjeketService mjeketService) {
        this.mjeketService = mjeketService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(path = "/{qytetiId}/{SpitaliID}/{repartiID}")
    public ResponseEntity<?> createMjeket(@PathVariable ("qytetiId") Long qytetiId, @PathVariable ("SpitaliID") Long SpitaliID,
                                          @PathVariable ("repartiID") Long repartiID,
                                        @RequestBody Mjeket mjeket
                                         ) {
        return ResponseEntity.ok(mjeketService.teOrUpdateMjeket(mjeket, qytetiId, SpitaliID, repartiID));
    }

    /* @PostMapping(path = "/{qytetiId}/{SpitaliID}/{repartiID}")
     public ResponseEntity<?> createMjeket(@PathVariable Long qytetiId, @PathVariable Long SpitaliID,
                                           @PathVariable Long repartiID,
                                           @RequestBody Mjeket mjeket,
                                           @RequestHeader("Authorization") String token) {

        
         ApiResponse isAdminResponse = adminService.checkAdmin(token);
         if (!isAdminResponse.isStatus()) {
             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("You are not authorized to create a doctor.");
         }

         return ResponseEntity.ok(mjeketService.teOrUpdateMjeket(mjeket, qytetiId, SpitaliID, repartiID));
     }
  */


    @GetMapping(path = "/o/{qytetiId}/{spitaliId}/{repartiId}/{mjekuId}")
    public Mjeket getEmployeeById(@PathVariable Long qytetiId, @PathVariable Long spitaliId,
                                  @PathVariable Long repartiId, @PathVariable Long mjekuId) {
        return mjeketService.getMjke(qytetiId, spitaliId, repartiId, mjekuId);
    }

    @GetMapping(path = "/all/{qytetiId}/{spitaliId}/{repartiId}")
    public List<Mjeket> getEmployeeList(@PathVariable ("qytetiId") Long qytetiId, @PathVariable ("spitaliId") Long spitaliId, @PathVariable ("repartiId") Long repartiId) {
        return mjeketService.getMjeketList(qytetiId, spitaliId, repartiId);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(path = "/delete/{departmentId}/{id}")
    public ResponseEntity<?> deleteEmployeeById(
                                                @PathVariable Long departmentId, @PathVariable Long id) {
      
        return mjeketService.deleteMjeketById(departmentId, id);
    }
}

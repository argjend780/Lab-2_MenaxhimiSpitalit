package com.example.medical.controller;

import com.example.medical.config.KafkaProducer;
import com.example.medical.model.LabResult;
import com.example.medical.model.MedicalImage;
import com.example.medical.model.MedicalRecord;
import com.example.medical.service.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/medical-records")
public class MedicalRecordController {

    @Autowired
    private MedicalRecordService service;

    private final KafkaProducer kafkaProducer;

    public MedicalRecordController(KafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping
    public MedicalRecord create(@RequestBody MedicalRecord record) {
        record.setCreatedAt(LocalDateTime.now());
        return service.save(record);
    }

    @GetMapping("/{id}")
    public Optional<MedicalRecord> getById(@PathVariable String id) {
        return service.findById(id);
    }

    @GetMapping
    public List<MedicalRecord> getAll() {
        return service.findAll();
    }

    

    @PostMapping("/{recordId}/lab-results")
    public MedicalRecord addLabResult(
        @PathVariable String recordId,
        @RequestBody LabResult labResult
    ) {
        MedicalRecord record = service.findById(recordId)
            .orElseThrow(() -> new RuntimeException("Medical record not found"));
        record.getLabResults().add(labResult);
        return service.save(record);
    }

    @PostMapping("/{recordId}/medical-images")
    public MedicalRecord addMedicalImage(
        @PathVariable String recordId,
        @RequestBody MedicalImage image
    ) {
        MedicalRecord record = service.findById(recordId)
            .orElseThrow(() -> new RuntimeException("Medical record not found"));
        record.getMedicalImages().add(image);
        return service.save(record);
    }

    @GetMapping("/{recordId}/lab-results")
    public List<LabResult> getLabResults(@PathVariable String recordId) {
        MedicalRecord record = service.findById(recordId)
            .orElseThrow(() -> new RuntimeException("Medical record not found"));
        return record.getLabResults();
    }


    @GetMapping("/by-pacient/{pacientId}")
    public List<MedicalRecord> getRecordsByPacientId(@PathVariable Long pacientId) {
        return service.findByPacientId(pacientId);
    }

    @GetMapping("/send/{id}")
    public String sendMedicalRecordToKafka(@PathVariable String id) {
        kafkaProducer.fetchFromDbAndSendToKafka(id);
        return "Kafka event triggered for record id: " + id;
    }

}

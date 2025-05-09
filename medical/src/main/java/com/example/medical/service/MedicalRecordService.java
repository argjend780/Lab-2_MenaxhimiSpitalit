package com.example.medical.service;

import com.example.medical.model.MedicalRecord;
import com.example.medical.repository.MedicalRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicalRecordService {
    @Autowired
    private MedicalRecordRepository repository;

    public MedicalRecord save(MedicalRecord record) {
        return repository.save(record);
    }

    public Optional<MedicalRecord> findById(String id) {
        return repository.findById(id);
    }

    public List<MedicalRecord> findAll() {
        return repository.findAll();
    }

    public List<MedicalRecord> findByPacientId(Long pacientId) {
        return repository.findByPacientId(pacientId);
    }
}
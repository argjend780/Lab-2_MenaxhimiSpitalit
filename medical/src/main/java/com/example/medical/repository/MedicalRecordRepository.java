package com.example.medical.repository;

import com.example.medical.model.MedicalRecord;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedicalRecordRepository extends MongoRepository<MedicalRecord, String> {
  List<MedicalRecord> findByPacientId(Long pacientId);
}
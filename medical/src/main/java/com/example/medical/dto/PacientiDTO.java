package com.example.medical.dto;

public class PacientiDTO {
    
    private long id;
    private String name;
    private String address;
    private String email;
    private String gjinia;
    private Long repartiId;
    private String repartiName;

    // Constructors
    public PacientiDTO() {}

    public PacientiDTO(long id, String name, String address, String email, String gjinia, Long repartiId, String repartiName) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.gjinia = gjinia;
        this.repartiId = repartiId;
        this.repartiName = repartiName;
    }

    // Getters and Setters
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getGjinia() {
        return gjinia;
    }
    public void setGjinia(String gjinia) {
        this.gjinia = gjinia;
    }

    public Long getRepartiId() {
        return repartiId;
    }
    public void setRepartiId(Long repartiId) {
        this.repartiId = repartiId;
    }

    public String getRepartiName() {
        return repartiName;
    }
    public void setRepartiName(String repartiName) {
        this.repartiName = repartiName;
    }
}

package org.meanxhimispitalit.menaxhimispitalit.Qyteti;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name = "qyteti")
public class QytetiEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String emri;
    private String vendiKodiPostal;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmri() {
        return emri;
    }

    public void setEmri(String emri) {
        this.emri = emri;
    }

    public String getVendiKodiPostal() {
        return vendiKodiPostal;
    }

    public void setVendiKodiPostal(String vendiKodiPostal) {
        this.vendiKodiPostal = vendiKodiPostal;
    }
}

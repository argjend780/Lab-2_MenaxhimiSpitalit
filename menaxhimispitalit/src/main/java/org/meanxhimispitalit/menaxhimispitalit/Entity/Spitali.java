package org.meanxhimispitalit.menaxhimispitalit.Entity;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "Spitali")

public class Spitali {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "spitali_id")
    private long id;

    @Column(name = "emri", nullable = false)
    private String emri;

    
    @Column(name = "adressa")
    private String adressa;


    @Column(name = "email", nullable = false)
    private String email;

    @ManyToOne(fetch = FetchType.EAGER) 
    @JoinColumn(name = "qyteti_id") 
    private Qyteti qyteti;
    
    @JsonManagedReference
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "spitali")
    private List<Reparti> repartet;

   /* @JsonIgnore
   	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "spitali")
   	private List<Reparti> repartiiList;*/
    
    // getters and setters
    public long getId() {
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
    public String getAdressa() {
        return adressa;
    }
    public void setAdressa(String adressa) {
        this.adressa = adressa;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Qyteti getQyteti() {
        return qyteti;
    }
    public void setQyteti(Qyteti qyteti) {
        this.qyteti = qyteti;
    }

    public List<Reparti> getRepartet() {
        return repartet;
    }

    public void setRepartet(List<Reparti> repartet) {
        this.repartet = repartet;
    }
    

    
    
}

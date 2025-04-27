package org.meanxhimispitalit.menaxhimispitalit.Entity;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;



@Entity
@Table(name = "Reparti")

public class Reparti {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "repartipk")
    private long id;

    
    @Column(name = "Emri", nullable = false)
    private String name;

    // @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "spitalid", nullable = false) 
    private Spitali spitali; 
    
   /*  @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "reparti")
    private List<Mjeket> mjeketliste;
    */
   
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "reparti")
    private List<Pacienti> pacientiliste;
    
    /*@JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "reparti")
    private List<Infermieret> infermieriliste;*/

    /*@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "spitali_id", nullable = false, updatable = false)
    private Spitali spitali;*/
    
    // getters and setters
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
    public Spitali getSpitali() {
        return spitali;
    }
    public void setSpitali(Spitali spitali) {
        this.spitali = spitali;
    }
    public List<Pacienti> getPacientiliste() {
        return pacientiliste;
    }
    public void setPacientiliste(List<Pacienti> pacientiliste) {
        this.pacientiliste = pacientiliste;
    }
}

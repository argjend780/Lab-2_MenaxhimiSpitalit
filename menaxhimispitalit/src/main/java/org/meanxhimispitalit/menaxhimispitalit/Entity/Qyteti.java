package org.meanxhimispitalit.menaxhimispitalit.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
import jakarta.persistence.CascadeType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "qyteti")
public class Qyteti {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "qyteti_emri", nullable = false) // <--- THIS is the fix
    private String emri;

    @JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "qyteti")
	private List<Spitali> spitalet; 

    // getters and setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmri() {
        return emri;
    }

    public void setEmri(String emri) {
        this.emri = emri;
    }
    public List<Spitali> getSpitalet() {
        return spitalet;
    }
    public void setSpitalet(List<Spitali> spitalet) {
        this.spitalet = spitalet;
    }
}

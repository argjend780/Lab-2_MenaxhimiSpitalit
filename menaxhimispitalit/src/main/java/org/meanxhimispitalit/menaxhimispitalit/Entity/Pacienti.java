package org.meanxhimispitalit.menaxhimispitalit.Entity;

import java.util.List;




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
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity

@Table(name="pacineti")
public class Pacienti {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="id")
	private long id;
	
	
	@Column(name ="name", nullable = false)
	private String name;
	
	
	@Column(name ="address", nullable = false)
	private String address;
	
	
	
	@Column(name ="email",nullable = false)
	private String email;
	
	
	@Column(name ="gjinia", nullable = false)
    private String gjinia;

	
	/*@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "pacineti")
	private List<Alergjia> alergjiList;*/
	
	@ManyToOne(fetch = FetchType.EAGER) 
	@JoinColumn(name = "departmentId", nullable = false, updatable = false)
	private Reparti reparti;
	
	/*@OneToOne(fetch = FetchType.EAGER, mappedBy = "pacienti")
	private DosjaMejeksore dosjaMejeksore;*/

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
    public Reparti getReparti() {
        return reparti;
    }
    public void setReparti(Reparti reparti) {
        this.reparti = reparti;
    }
	
}

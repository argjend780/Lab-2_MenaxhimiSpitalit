package org.meanxhimispitalit.menaxhimispitalit.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;


@Entity
@Table(name = "Mjeket")

public class Mjeket {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "id")
private long id;

@Column(name = "name",nullable = false)
private String name;

@Column(name = "address",nullable = false)
private String address;

@Column(name = "email",nullable = false)
private String email;

@Column(name = "phoneNumber",nullable = false)
private String phoneNumber;

@JsonBackReference
@ManyToOne(fetch = FetchType.EAGER)
@JoinColumn(name = "departmentId", nullable = false, updatable = false)
private Reparti reparti;

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

public String getPhoneNumber() {
    return phoneNumber;
}

public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
}

public Reparti getReparti() {
    return reparti;
}

public void setReparti(Reparti reparti) {
    this.reparti = reparti;
}

/*@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "employee")
@JsonIgnore
private List<Takimet> takimetlist;

@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "employee")
@JsonIgnore
private List<Receta> recetalist;

@OneToOne(fetch = FetchType.EAGER, mappedBy = "mjeket", cascade = CascadeType.ALL)
private Specializimi specializimi;
*/

}
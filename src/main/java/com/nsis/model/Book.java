package com.nsis.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "books")
public class Book implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;

	public Book() {
	}

	// Getters et Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
@Column(name="titre", nullable = false)
	String titre;

	public void setTitre(String titre){
		this.titre = titre;
	}
	public String getTitre(){
		return titre;
}


@Column(name="isbn", nullable = false)
	String isbn;

	public void setIsbn(String isbn){
		this.isbn = isbn;
	}
	public String getIsbn(){
		return isbn;
}


@Column(name="auteur", nullable = false)
	String auteur;

	public void setAuteur(String auteur){
		this.auteur = auteur;
	}
	public String getAuteur(){
		return auteur;
}


}

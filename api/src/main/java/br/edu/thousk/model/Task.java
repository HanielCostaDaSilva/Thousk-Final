package br.edu.thousk.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import jakarta.persistence.ManyToOne;

import javax.persistence.Column;
import java.util.Date;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String imageLink;

    @Column
    private String dateStart;

    @Column
    private String dateFinal;

    @Column
    private String state;

    @Column
    private String category;

    // Relacionamento com usuário (exemplo de relacionamento)
    @ManyToOne
    private User user;

    // Relacionamento com grupo (exemplo de relacionamento)
    // @ManyToOne
    // @JoinColumn(name = "group_id")
    // private Group group;

    // Construtores, getters e setters

    public Task() {
        // Construtor padrão necessário para JPA
    }

    public Task(String title, String description, String imageLink, String dateStart, String dateFinal, String state,
            String category) {
        this.title = title;
        this.description = description;
        this.imageLink = imageLink;
        this.dateStart = dateStart;
        this.dateFinal = dateFinal;
        this.state = state;
        this.category = category;
    }

    // Outros métodos, getters e setters

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getDateStart() {
        return dateStart;
    }
    public void setDateStart(String dateStart){
        this.dateStart = dateStart;
    }
    public String getDateFinal() {
        return dateFinal;
    }
    public void setDateFinal(String DateFinal){
        this.dateFinal = DateFinal;
    }
}


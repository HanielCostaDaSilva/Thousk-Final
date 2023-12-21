package br.edu.thousk.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

import javax.persistence.Column;
import java.util.List;

@Entity
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @Column(nullable = false)
    private String authorID;

    // Relacionamento com participantes
    @ElementCollection
    @ManyToMany(mappedBy = "groups")
    private List<User> members;

    // Relacionamento com tarefas
    @OneToMany(mappedBy = "group")
    private List<Task> tasks;

    public Group() {
    }

    public Group(String name, String description, String authorID) {
        this.name = name;
        this.description = description;
        this.authorID = authorID;
    }

    // Outros métodos, getters e setters

    // Exemplo de getters e setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthorID() {
        return authorID;
    }

    public void setAuthorID(String authorID) {
        this.authorID = authorID;
    }

    // Adicione getters e setters para outros campos, se necessário

}

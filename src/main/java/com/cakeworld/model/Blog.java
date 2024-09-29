package com.cakeworld.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="cake_blog")
public class Blog {
    @Id
    @SequenceGenerator(
            name = "cake_blog_sequence",
            sequenceName = "cake_blog_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "cake_blog_sequence"
    )
    private Long id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "username", nullable = false)
    private String username;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "date", nullable = false)
    private LocalDate date;
    @Column(name = "recipe", nullable = false)
    private String recipe;

    public Blog() {}

    public Blog(String title, String username, String email, LocalDate date, String recipe) {
        this.title = title;
        this.username = username;
        this.email = email;
        this.date = date;
        this.recipe = recipe;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getRecipe() {
        return recipe;
    }

    public void setRecipe(String recipe) {
        this.recipe = recipe;
    }
}

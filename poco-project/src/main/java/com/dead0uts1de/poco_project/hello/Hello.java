package com.dead0uts1de.poco_project.hello;

import jakarta.persistence.*;

@Entity
@Table(name = "hello")
public class Hello {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "message")
    private String message;

    public Hello() {
    }

    public Hello(String message) {
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }
}

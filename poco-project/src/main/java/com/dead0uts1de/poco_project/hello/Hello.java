package com.dead0uts1de.poco_project.hello;

import jakarta.persistence.*;

@Entity
@Table(name = "hello")
public class Hello {
    @Id
    @SequenceGenerator(
            name = "hello_sequence",
            sequenceName = "hello_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hello_sequence")
    @Column(name = "id", updatable = false, nullable = false)
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

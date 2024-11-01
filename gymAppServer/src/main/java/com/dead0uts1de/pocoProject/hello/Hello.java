package com.dead0uts1de.pocoProject.hello;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Entity
@Table(name = "hello")
@NoArgsConstructor
@AllArgsConstructor
public class Hello {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "message")
    @Setter
    private String message;

    public Hello(String message) {
        this.message = message;
    }

}

package com.dead0uts1de.poco_project.exercise;

import jakarta.persistence.*;

@Entity
@Table(name = "exercise")
public class Exercise {
    @Id
    @SequenceGenerator(
            name = "exercise_id_sequence",
            sequenceName = "exercise_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "exercise_id_sequence")
    @Column(name = "id", unique = true, nullable = false, updatable = false)
    private Long id;

}

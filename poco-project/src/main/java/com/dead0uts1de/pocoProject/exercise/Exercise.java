package com.dead0uts1de.pocoProject.exercise;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@NoArgsConstructor
@Getter
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String name;

    @Setter
    private Float weight;

    @Setter
    private Integer sets;

    @Getter
    @Setter
    private Integer reps;

    public Exercise(String name, Float weight, Integer sets, Integer reps) {
        this.name = name;
        this.weight = weight;
        this.sets = sets;
        this.reps = reps;
    }
}

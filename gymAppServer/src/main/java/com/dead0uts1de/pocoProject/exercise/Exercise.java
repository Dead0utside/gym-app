package com.dead0uts1de.pocoProject.exercise;

import com.dead0uts1de.pocoProject.training.Training;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "training_id")
    @JsonIgnore
    @Setter
    private Training training;

    public Exercise(String name, Float weight, Integer sets, Integer reps) {
        this.name = name;
        this.weight = weight;
        this.sets = sets;
        this.reps = reps;
    }
}

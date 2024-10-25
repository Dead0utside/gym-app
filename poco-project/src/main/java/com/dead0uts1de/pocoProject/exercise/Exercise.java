package com.dead0uts1de.pocoProject.exercise;

import com.dead0uts1de.pocoProject.training.Training;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

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

    @JsonIgnore
    @ManyToMany(mappedBy = "includedExercises")
    private List<Training> trainings;

    public Exercise(String name, Float weight, Integer sets, Integer reps) {
        this.name = name;
        this.weight = weight;
        this.sets = sets;
        this.reps = reps;
        this.trainings = new ArrayList<>();
    }
}

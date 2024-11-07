package com.dead0uts1de.pocoProject.training;

import com.dead0uts1de.pocoProject.exercise.Exercise;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Training {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "training_id")
    private Long id;

    @Setter
    private String name;

    @Nullable
    @Setter
    private String description;

    @OneToMany(mappedBy = "training", cascade = CascadeType.ALL, orphanRemoval = true)
    @Setter
    private List<Exercise> includedExercises;

    public void addExerciseToTraining(Exercise exercise) {
        exercise.setTraining(this);
        includedExercises.add(exercise);
    }

    public Training(String name) {
        this.name = name;
        this.includedExercises = new ArrayList<>();
    }
}

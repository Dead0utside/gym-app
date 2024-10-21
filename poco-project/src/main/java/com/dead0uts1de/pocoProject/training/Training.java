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
    private Long id;

    @Setter
    private String name;

    @Nullable
    @Setter
    private String description;

    @ManyToMany
    @JoinTable(
            name = "training_to_exercise",
            joinColumns = @JoinColumn(name = "training_id"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )
    @Setter
    private List<Exercise> includedExercises;

    public Training(String name) {
        this.name = name;
        this.includedExercises = new ArrayList<>();
    }
}

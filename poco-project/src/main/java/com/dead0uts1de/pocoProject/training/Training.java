package com.dead0uts1de.pocoProject.training;

import com.dead0uts1de.pocoProject.exercise.Exercise;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@NoArgsConstructor
public class Training {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String name;

    @ManyToMany
    @JoinTable(
            name = "training_to_exercise",
            joinColumns = @JoinColumn(name = "training_id"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )
    @Setter
    private Set<Exercise> includedExercises;

    public Training(String name) {
        this.name = name;
        this.includedExercises = new HashSet<>();
    }
}

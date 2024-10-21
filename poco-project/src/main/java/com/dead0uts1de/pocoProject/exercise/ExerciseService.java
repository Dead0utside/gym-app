package com.dead0uts1de.pocoProject.exercise;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExerciseService {
    private final ExerciseRepository exerciseRepository;

    public Exercise getExerciseById(Long id) {
        return exerciseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Exercise with id " + id + " not found"));
    }

    public void addExercise(Exercise exercise) {
        if (exerciseRepository.existsByNameAndTrainings(exercise.getName(), exercise.getTrainings())) {
            throw new RuntimeException("exercise already exists");
        }
        this.exerciseRepository.save(exercise);
    }
}

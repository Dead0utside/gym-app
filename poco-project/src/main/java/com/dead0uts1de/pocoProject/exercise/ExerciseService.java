package com.dead0uts1de.pocoProject.exercise;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExerciseService {
    private final ExerciseRepository exerciseRepository;

    public Exercise getExerciseById(Long id) {
        return exerciseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Exercise with id " + id + " not found"));
    }

    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    public void addExercise(Exercise exercise) {
        if (exerciseRepository.existsByNameAndTrainings(exercise.getName(), exercise.getTrainings())) {
            throw new RuntimeException("exercise already exists");
        }
        this.exerciseRepository.save(exercise);
    }

    public List<Exercise> getExercisesInTraining(Long trainingId) {
        return exerciseRepository.findByTrainingsId(trainingId);
    }
}

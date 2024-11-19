package com.dead0uts1de.pocoProject.exercise;

import com.dead0uts1de.pocoProject.training.TrainingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExerciseService {
    private final ExerciseRepository exerciseRepository;
    private final TrainingService trainingService;

    public Exercise getExerciseById(Long id) {
        return exerciseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Exercise with id " + id + " not found"));
    }

    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

//    public void addExercise(Exercise exercise) {
//        if (exerciseRepository.existsByNameAndTraining(exercise.getName(), exercise.getTraining())) {
//            throw new RuntimeException("exercise already exists");
//        }
//        this.exerciseRepository.save(exercise);
//    }

    public List<Exercise> getExercisesInTraining(Long trainingId) {
        return exerciseRepository.findByTrainingId(trainingId);
    }

    public void createExerciseInTraining(Exercise exercise, Long trainingId) {
        if (exerciseRepository.existsByNameAndTrainingId(exercise.getName(), trainingId)) {
            throw new RuntimeException("exercise already exists in " + exercise.getTraining());
        }
        this.exerciseRepository.save(exercise);
        trainingService.addExerciseToTraining(trainingId, exercise);
    }

    public void deleteExerciseByID(Long id) {
        exerciseRepository.deleteById(id);
    }
}

package com.dead0uts1de.pocoProject;

import com.dead0uts1de.pocoProject.exercise.Exercise;
import com.dead0uts1de.pocoProject.exercise.ExerciseController;
import com.dead0uts1de.pocoProject.training.Training;
import com.dead0uts1de.pocoProject.training.TrainingController;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class PopulateDb implements CommandLineRunner {

    private final ExerciseController exerciseController;
    private final TrainingController trainingController;

    @Override
    @Transactional
    public void run(String... args) {
        Exercise ex1 = new Exercise("bench press", 55f, 3, 12);
        Exercise ex2 = new Exercise("curls", 20f, 3, 12);
        Exercise ex3 = new Exercise("squats", 50f, 3, 12);
        Exercise ex4 = new Exercise("pushdowns", 20f, 3, 12);

        Training training1 = new Training("monday");
        Training training2 = new Training("tuesday");
        Training training3 = new Training("thursday");
        Training training4 = new Training("friday");

        trainingController.addTraining(training1);
        trainingController.addTraining(training2);
        trainingController.addTraining(training3);
        trainingController.addTraining(training4);

        exerciseController.createExerciseInTraining(ex1, 1L);
        exerciseController.createExerciseInTraining(ex2, 1L);
        exerciseController.createExerciseInTraining(ex3, 2L);
        exerciseController.createExerciseInTraining(ex4, 3L);
    }
}

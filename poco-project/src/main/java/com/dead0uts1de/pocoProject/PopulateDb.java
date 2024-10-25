package com.dead0uts1de.pocoProject;

import com.dead0uts1de.pocoProject.exercise.Exercise;
import com.dead0uts1de.pocoProject.exercise.ExerciseController;
import com.dead0uts1de.pocoProject.hello.Hello;
import com.dead0uts1de.pocoProject.hello.HelloService;
import com.dead0uts1de.pocoProject.training.Training;
import com.dead0uts1de.pocoProject.training.TrainingController;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PopulateDb {
    @Bean
    CommandLineRunner HelloCLR(HelloService helloService, ExerciseController exerciseController, TrainingController trainingController) {
        return args -> {
            Hello hello = new Hello("Hello World");
            helloService.addHello(hello);

            Exercise ex1 = new Exercise("bench press", 55f, 3, 12);
            Exercise ex2 = new Exercise("curls", 20f, 3, 12);
            Exercise ex3 = new Exercise("squats", 50f, 3, 12);
            Exercise ex4 = new Exercise("pushdowns", 20f, 3, 12);

            exerciseController.addExercise(ex1);
            exerciseController.addExercise(ex2);
            exerciseController.addExercise(ex3);
            exerciseController.addExercise(ex4);

            Training training1 = new Training("monday");
            Training training2 = new Training("tuesday");
            Training training3 = new Training("thursday");
            Training training4 = new Training("friday");

            trainingController.addTraining(training1);
            trainingController.addTraining(training2);
            trainingController.addTraining(training3);
            trainingController.addTraining(training4);

            trainingController.addExerciseToTraining(1L, 1L);
            trainingController.addExerciseToTraining(1L, 2L);
            trainingController.addExerciseToTraining(1L, 3L);
            trainingController.addExerciseToTraining(1L, 4L);
            trainingController.addExerciseToTraining(2L, 3L);
            trainingController.addExerciseToTraining(2L, 4L);
            trainingController.addExerciseToTraining(3L, 4L);

        };
    }
}

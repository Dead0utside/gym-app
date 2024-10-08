package com.dead0uts1de.pocoProject;

import com.dead0uts1de.pocoProject.exercise.Exercise;
import com.dead0uts1de.pocoProject.exercise.ExerciseController;
import com.dead0uts1de.pocoProject.exercise.ExerciseService;
import com.dead0uts1de.pocoProject.hello.Hello;
import com.dead0uts1de.pocoProject.hello.HelloService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PopulateDb {
    @Bean
    CommandLineRunner HelloCLR(HelloService helloService, ExerciseService exerciseService, ExerciseController exerciseController) {
        return args -> {
            Hello hello = new Hello("Hello World");
            helloService.addHello(hello);

            Exercise ex = new Exercise("bench press", 55f, 3, 12);
            exerciseController.addExercise(ex);
        };
    }
}

package com.dead0uts1de.pocoProject.exercise;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/exercise")
public class ExerciseController {
    private final ExerciseService exerciseService;
    private final HttpHeaders headers = new HttpHeaders();

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
        headers.add("Content-Type", "application/json; charset=utf-8");
//        headers.add("Access-Control-Allow-Origin", "*");
    }

    @GetMapping(path = "/get/{exerciseId}")
    public ResponseEntity<Exercise> getExerciseById(@PathVariable(value = "exerciseId") Long id) {
        Exercise result;
        try {
            result = exerciseService.getExerciseById(id);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(result, headers, HttpStatus.OK);
    }

    @GetMapping(path = "/get")
    public ResponseEntity<List<Exercise>> getAllExercises() {
        return new ResponseEntity<>(exerciseService.getAllExercises(), headers, HttpStatus.OK);
    }

    @PostMapping(path = "/add")
    public ResponseEntity<String> addExercise(@RequestBody Exercise exercise) {
        try {
            exerciseService.addExercise(exercise);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Add exercise", HttpStatus.OK);
    }

    @GetMapping(path = "/get-from-training/{trainingId}")
    public ResponseEntity<List<Exercise>> getExercisesInTraining(@PathVariable(value = "trainingId") Long trainingId) {
        return new ResponseEntity<>(exerciseService.getExercisesInTraining(trainingId), headers, HttpStatus.OK);
    }

    @PostMapping(path = "add-to-training/{trainingId}")
    public ResponseEntity<String> createExerciseInTraining(@RequestBody Exercise exercise, @PathVariable(name = "trainingId") Long trainingId) {
        try {
            exerciseService.createExerciseInTraining(exercise, trainingId);
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Add exercise", HttpStatus.OK);
    }
}

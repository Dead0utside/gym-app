package com.dead0uts1de.pocoProject.exercise;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/exercise")
public class ExerciseController {
    private final ExerciseService exerciseService;
    private final HttpHeaders headers = new HttpHeaders();

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
        headers.add("Content-Type", "application/json; charset=utf-8");
        headers.add("Access-Control-Allow-Origin", "*");
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

    @PostMapping(path = "/add")
    public ResponseEntity<String> addExercise(@RequestBody Exercise exercise) {
        try {
            exerciseService.addExercise(exercise);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("exercise already exists", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Add exercise", HttpStatus.OK);
    }

}

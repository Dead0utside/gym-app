package com.dead0uts1de.pocoProject.exercise;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/exercise")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;

    @GetMapping(path = "/get/{exerciseId}")
    public ResponseEntity<Exercise> getExerciseById(@PathVariable(value = "exerciseId") Long id) {
        return ResponseEntity.ok()
                .header("Access-Control-Allow-Origin", "*")
                .body(exerciseService.getExerciseById(id));
    }

    @PostMapping(path = "/add")
    public ResponseEntity<String> addExercise(@RequestBody Exercise exercise) {
        exerciseService.addExercise(exercise);
        return new ResponseEntity<>("Add exercise", HttpStatus.OK);
    }

}

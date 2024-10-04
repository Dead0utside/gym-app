package com.dead0uts1de.pocoProject.exercise;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/exercise")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;

    public ResponseEntity<Exercise> getExerciseById(Long id) {
        return ResponseEntity.ok()
                .header("Access-Control-Allow-Origin", "*")
                .body(exerciseService.getExerciseById(id));
    }
}

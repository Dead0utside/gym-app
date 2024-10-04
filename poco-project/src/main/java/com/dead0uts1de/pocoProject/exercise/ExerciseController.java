package com.dead0uts1de.pocoProject.exercise;

import com.dead0uts1de.pocoProject.config.CustomResponseEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/exercise")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;

    public CustomResponseEntity getExerciseById(Long id) {
        return null;
    }
}

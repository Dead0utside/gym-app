package com.dead0uts1de.pocoProject.training;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/training")
@RequiredArgsConstructor
public class TrainingController {
    private final TrainingService trainingService;

    @GetMapping(path = "/get/{trainingId}")
    public ResponseEntity<Training> getTrainingById(@PathVariable(value = "trainingId") Long id) {
        return ResponseEntity.ok()
                .header("Access-Control-Allow-Origin", "*")
                .body(trainingService.getTrainingById(id));
    }

}

package com.dead0uts1de.pocoProject.training;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/training")
public class TrainingController {
    private final TrainingService trainingService;
    private final HttpHeaders headers;

    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
        this.headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
//        headers.add("Access-Control-Allow-Origin", "*");
    }

    @GetMapping(path = "/get/{trainingId}")
    public ResponseEntity<Training> getTrainingById(@PathVariable(value = "trainingId") Long id) {
        Training result;
        try {
            result = trainingService.getTrainingById(id);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(headers, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(result, headers, HttpStatus.OK);
    }

    @GetMapping(path = "/get")
    public ResponseEntity<List<Training>> getAllTrainings() {
        return new ResponseEntity<>(trainingService.getAllTrainings(), headers, HttpStatus.OK);
    }

    @PostMapping(path = "/add")
    public ResponseEntity<String> addTraining(@RequestBody Training training) {
        try {
            trainingService.addTraining(training);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("training already exists", headers, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("add training", headers, HttpStatus.OK);
    }
}

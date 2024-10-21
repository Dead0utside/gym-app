package com.dead0uts1de.pocoProject.training;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TrainingService {
    private final TrainingRepository trainingRepository;

    public Training getTrainingById(Long id) {
        return trainingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("training with id " + id + " not found"));
    }

    public List<Training> getAllTrainings() {
        return trainingRepository.findAll();
    }

}

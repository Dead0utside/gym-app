package com.dead0uts1de.pocoProject.exercise;

import com.dead0uts1de.pocoProject.training.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {

    @Override
    @NonNull
    Optional<Exercise> findById(@NonNull Long id);

    @NonNull
    List<Exercise> findAll();

    boolean existsByNameAndTrainings(String name, List<Training> trainings);
}

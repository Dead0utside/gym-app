package com.dead0uts1de.pocoProject.exercise;

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

    boolean existsByNameAndTrainingId(String name, Long trainingId);

    @NonNull
    List<Exercise> findByTrainingId(Long trainingId);
}

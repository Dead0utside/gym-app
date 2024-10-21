package com.dead0uts1de.pocoProject.training;

import com.dead0uts1de.pocoProject.exercise.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Long>{
    @NonNull
    Optional<Training> findById(@NonNull Long id);

    @NonNull
    List<Training> findAll();

    boolean existsByNameAndIncludedExercises(String name, List<Exercise> includedExercises);

    @Query(value = "SELECT e FROM Exercise e WHERE e.id = ?1")
    List<Exercise> findExercisesForTraining(Long trainingId);
}

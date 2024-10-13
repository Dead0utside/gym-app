package com.dead0uts1de.pocoProject.training;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Long>{
    @NonNull
    Optional<Training> findById(@NonNull Long id);
}

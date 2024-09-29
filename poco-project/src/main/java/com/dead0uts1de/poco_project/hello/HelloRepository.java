package com.dead0uts1de.poco_project.hello;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HelloRepository extends JpaRepository<Hello, Long> {
    @Query("SELECT h FROM Hello h WHERE h.id = 1")
    Optional<Hello> findFirst();
}

package com.dead0uts1de.poco_project.exercise;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Exercise {
    @Id
    private Long id;

    @Setter
    private String name;

    @Setter
    private Float weight;

    @Setter
    private Integer sets;

    @Getter
    @Setter
    private Integer reps;

}

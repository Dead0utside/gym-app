package com.dead0uts1de.pocoProject.config;

import org.springframework.http.ResponseEntity;

public class CustomResponseEntity {
    public <T> ResponseEntity<T> OkResponse(T body) {
        return ResponseEntity.ok().header("Access-Control-Allow-Origin", "*").body(body);
    }
}

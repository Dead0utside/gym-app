package com.dead0uts1de.poco_project.hello;

import org.springframework.stereotype.Service;

@Service
public class HelloService {
    private final HelloRepository helloRepository;

    public HelloService(HelloRepository helloRepository) {
        this.helloRepository = helloRepository;
    }

    public Hello getFirst() {
        return this.helloRepository.findFirst().orElseThrow(() -> new RuntimeException("first not found"));
    }
}

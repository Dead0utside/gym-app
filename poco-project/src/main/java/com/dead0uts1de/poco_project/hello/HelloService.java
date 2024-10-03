package com.dead0uts1de.poco_project.hello;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HelloService {
    private final HelloRepository helloRepository;

    public Hello getFirst() {
        return this.helloRepository.findFirst().orElseThrow(() -> new RuntimeException("first not found"));
    }

    public void addHello(Hello hello) {
        helloRepository.save(hello);
    }
}

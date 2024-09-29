package com.dead0uts1de.poco_project.hello;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/hello")
public class HelloController {
    private final HelloService helloService;

    public HelloController(HelloService helloService) {
        this.helloService = helloService;
    }

    @GetMapping(path = "/first")
    public ResponseEntity<Hello> getFirst() {
        return new ResponseEntity<>(helloService.getFirst(), HttpStatus.OK);
    }

    @PostMapping(path = "/add")
    public ResponseEntity<String> addHello(Hello hello) {
        helloService.addHello(hello);
        return new ResponseEntity<>("Added hello", HttpStatus.OK);
    }
}

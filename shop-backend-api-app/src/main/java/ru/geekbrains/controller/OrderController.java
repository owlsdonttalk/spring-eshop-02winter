package ru.geekbrains.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.geekbrains.controller.dto.OrderDto;

import java.util.Collections;
import java.util.List;

@PreAuthorize("isAuthenticated()")
@RequestMapping("/v1/order")
@RestController
public class OrderController {

    @GetMapping
    public List<OrderDto> findAll() {
        return Collections.emptyList();
    }
}

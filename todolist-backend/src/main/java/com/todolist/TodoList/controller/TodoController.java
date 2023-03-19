package com.todolist.TodoList.controller;

import com.todolist.TodoList.model.Todo;
import com.todolist.TodoList.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @PostMapping("/todo")
    public Todo newUser(@RequestBody Todo newUser) {
        return todoRepository.save(newUser);
    }

    @GetMapping("/todos")
    public List<Todo> getAllUsers() {
        return todoRepository.findAll();
    }
}
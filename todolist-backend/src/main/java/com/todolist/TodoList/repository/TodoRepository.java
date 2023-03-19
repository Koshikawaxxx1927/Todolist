package com.todolist.TodoList.repository;

import com.todolist.TodoList.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long>  {
}

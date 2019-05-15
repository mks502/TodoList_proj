package com.todolist.mks.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todolist.mks.domain.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}

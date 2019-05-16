package com.todolist.mks.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.mks.domain.entity.Todo;
import com.todolist.mks.domain.service.TodoService;

@RestController
@RequestMapping(value = "/api/todo")
public class TodoController {

	@Autowired
	TodoService todoService;
	
	 @PostMapping(value= "/create")
	 public void todoCreate(@RequestBody Todo todo) {
		 System.out.println(todo);
		 todoService.createTodo(todo);
	 }
	 
	 @PostMapping(value= "/delete")
	 public void todoDelete(@RequestBody Todo todo) {
		 todoService.deleteTodo(todo);
	 }
	 @GetMapping(value="allTodos")
	 public void todoList() {
	 }
	 
	

}

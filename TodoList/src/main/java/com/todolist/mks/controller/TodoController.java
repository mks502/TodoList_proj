package com.todolist.mks.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	 public Todo todoCreate(@RequestBody Todo todo) {
		 System.out.println(todo);
		 Todo newTodo = todoService.createTodo(todo);
		 return newTodo;
	 }
	 
	 @DeleteMapping(value= "/delete")
	 public Todo todoDelete(@RequestBody Todo todo) {
		 System.out.println("todo"+todo);
		 Todo deleteTodo=todoService.deleteTodo(todo);
		 return deleteTodo;
	 }
	 @PutMapping(value="update")
	 public Todo todoUpdate(@RequestBody Todo todo) {
		 Todo updateTodo=todoService.updateTodo(todo);
		 return updateTodo;
	 }
	 
	 @GetMapping(value="/alltodos")
	 public List<Todo> todoList() {
		 System.out.println("들어오냐");
		 List<Todo> allTodos= todoService.readAllTodos();
		 return allTodos;
	 }
	 @GetMapping(value="/latetodos")
	 public List<Todo> lateTodoList() {
		 List<Todo> lateTodos= todoService.readLateTodos();
		 return lateTodos;
	 }
	 @GetMapping(value="/todaytodos")
	 public List<Todo> todayTodoList() {
		 System.out.println("오늘");
		 List<Todo> todayTodos= todoService.readTodayTodos();
		 return todayTodos;
	 }
	 
	 
}

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
	
	 @PostMapping(value= "/create")  //투두 생성 
	 public Todo todoCreate(@RequestBody Todo todo) {
		 System.out.println(todo);
		 Todo newTodo = todoService.createTodo(todo);
		 return newTodo;
	 }
	 
	 @DeleteMapping(value= "/delete")   //투두 삭제
	 public Todo todoDelete(@RequestBody Todo todo) {
		 System.out.println("todo"+todo);
		 Todo deleteTodo=todoService.deleteTodo(todo);
		 return deleteTodo;
	 }
	 @PutMapping(value="update")     //투두 수정
	 public Todo todoUpdate(@RequestBody Todo todo) {
		 Todo updateTodo=todoService.updateTodo(todo);
		 return updateTodo;
	 }
	  
	 @GetMapping(value="/alltodos")    //모든 전체 투두리스트
	 public List<Todo> todoList() {
		 List<Todo> allTodos= todoService.readAllTodos();
		 return allTodos;
	 }
	 @GetMapping(value="/latetodos")     //완료하지 못 하고 마감기한이 지난 리스트들
	 public List<Todo> lateTodoList() {
		 List<Todo> lateTodos= todoService.readLateTodos();
		 return lateTodos;
	 }
	 @GetMapping(value="/todaytodos")   //오늘날짜 리스트들
	 public List<Todo> todayTodoList() {
		 List<Todo> todayTodos= todoService.readTodayTodos();
		 return todayTodos;
	 }
	 
	 
}

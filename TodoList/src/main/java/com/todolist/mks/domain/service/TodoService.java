package com.todolist.mks.domain.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todolist.mks.domain.entity.Todo;
import com.todolist.mks.domain.repository.TodoRepository;

@Service
public class TodoService {
	@Autowired TodoRepository todoRepository;
	
	public Todo createTodo(Todo todo) {
		Todo newTodo = Todo.builder()
				.title(todo.getTitle()).content(todo.getContent())
				.deadline(todo.getDeadline()).priority(todo.getPriority())
				.startDate(LocalDate.now()).finish(false)
				.build();
		todoRepository.save(newTodo);
		return newTodo;
	}
	
	public Todo deleteTodo(Todo todo) {
		Todo deletedTodo = todoRepository.findOneByTid(todo.getTid());
		todoRepository.delete(deletedTodo);
		return deletedTodo;
	}
	
	public Todo updateTodo(Todo todo) {
		Todo updatedTodo = todoRepository.findOneByTid(todo.getTid());
		if(updatedTodo == null) return null;
		updatedTodo.updateTitle(todo.getTitle());
		updatedTodo.updateContent(todo.getContent());
		updatedTodo.updateDeadline(todo.getDeadline());
		updatedTodo.updatePriority(todo.getPriority());
		updatedTodo.updateFinish(todo.isFinish());
		todoRepository.save(updatedTodo);
		return updatedTodo;
	}
	public List<Todo> readAllTodos(){
		List<Todo> allTodos= todoRepository.findAll();
		System.out.println(LocalDate.now());
		return allTodos;
	}
	public List<Todo> readLateTodos(){  //완료하지 못 한채 마감기한이 지나버린 투두들
		List<Todo> allTodos= readAllTodos();
		List<Todo> lateTodos= new ArrayList<Todo>();
		for (Todo todo : allTodos) {
			if( todo.isFinish()==false && todo.getDeadline().isBefore(LocalDate.now()) ) { //아직 완료가 되지 않고 날짜가 지났으면
				lateTodos.add(todo);
			}
		}
		return lateTodos;
	}
	public List<Todo> readTodayTodos(){
		List<Todo> todayTodos = new ArrayList<Todo>();
		List<Todo> allTodos = todoRepository.findAll();
		for (Todo todo : allTodos) {
//			System.out.println("오늘날짜 맞니"+LocalDate.now().isEqual(todo.getDeadline()));
			if(LocalDate.now().isEqual(todo.getDeadline())) todayTodos.add(todo);
		}
		System.out.println(todayTodos);
		return todayTodos;
	}

}

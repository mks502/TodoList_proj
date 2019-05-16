package com.todolist.mks.domain.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todolist.mks.domain.entity.Todo;
import com.todolist.mks.domain.repository.TodoRepository;

@Service
public class TodoService {
	@Autowired TodoRepository todoRepository;
	
	public Todo createTodo(Todo todo) {
		Todo newTodo = Todo.builder().title(todo.getTitle()).content(todo.getContent()).deadline(todo.getDeadline()).priority(todo.getPriority()).startDate(LocalDate.now())
				.build();
		todoRepository.save(newTodo);
		return newTodo;
	}
	
	public Todo deleteTodo(Todo todo) {
		Todo deletedTodo = todoRepository.findOneByTid(todo.getTid());
		todoRepository.delete(deletedTodo);
		return deletedTodo;
	}
	
	public Todo updateTodo(Todo originTodo,Todo newTodo) {
		Todo updatedTodo = todoRepository.findOneByTid(originTodo.getTid());
		if(updatedTodo == null) return null;
		
		updatedTodo.setTitle(newTodo.getTitle());
		updatedTodo.setContent(newTodo.getContent());
		updatedTodo.setDeadline(newTodo.getDeadline());
		updatedTodo.setPriority(newTodo.getPriority());
		todoRepository.save(updatedTodo);
		return updatedTodo;
	}
	
	

}

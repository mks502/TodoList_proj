package com.todolist.mks.domain.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// Todo Entity      
@Entity  
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Todo {
	//JPA 권장에 따른 생성키
	@Id @GeneratedValue(strategy= GenerationType.AUTO)
	private Long tid;
	//제목
	private String title;
	//내용
	private String content;
	//시작 날짜
	private LocalDate startDate;
	//마감 기한
	LocalDate deadline;
	
	//우선 순위는 ENUM으로
	@Enumerated(EnumType.STRING)
    private Priority priority;
	
	//완료 여부
	private boolean finish;
	
	//명시적으로 수정 알리기 위해
	public void updateTitle(String title) {
		this.title = title;
	}
	public void updateContent(String content) {
		this.content = content;
	}
	public void updatePriority(Priority priority) {
		this.priority = priority;
	}
	public void updateDeadline(LocalDate deadline) {
		this.deadline=deadline;
	}
	public void updateFinish(boolean finish) {
		this.finish=finish;
	}
}
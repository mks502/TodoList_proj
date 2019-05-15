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
	String title;
	//내용
	String content;
	//마감 기한 입니다
	LocalDate deadline;
	@Enumerated(EnumType.STRING)
    private Priority priority;
}
package com.todolist.mks.domain.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity 
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class Member {
	@Id
	String username;
	String password;
}

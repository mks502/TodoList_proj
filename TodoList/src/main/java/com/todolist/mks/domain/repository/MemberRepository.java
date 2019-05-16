package com.todolist.mks.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todolist.mks.domain.entity.Member;

public interface MemberRepository extends JpaRepository<Member, String> {
	public Member findOneByUsername(String username);
}

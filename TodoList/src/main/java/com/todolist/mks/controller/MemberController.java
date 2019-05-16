package com.todolist.mks.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.mks.domain.entity.Member;
import com.todolist.mks.domain.service.MemberService;

@RestController
@RequestMapping(value = "/api/member")
public class MemberController {
	@Autowired
	MemberService memberService;
	 @PostMapping(value= "/register")
	 public Member register(@RequestBody Member mem) {
		 System.out.println("회원가입"+mem);
		 Member newMem=memberService.register(mem);
		 return newMem;
	 }
	 @PostMapping(value= "/idCheck")
	 public boolean idCheck(@RequestBody Member mem) {
		 System.out.println("idcheck"+mem);
		 boolean check=memberService.idCheck(mem);
		 return check;
	 }
}

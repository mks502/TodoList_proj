package com.todolist.mks.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todolist.mks.domain.entity.Member;
import com.todolist.mks.domain.repository.MemberRepository;

@Service
public class MemberService {
	@Autowired
	MemberRepository memberRepository;
	
	
	public Member register(Member mem) { //회원가입
		Member newMember = Member.builder()
				.username(mem.getUsername()).password(mem.getPassword())
				.build();
		memberRepository.save(newMember);
		return newMember;
	}
	
	
	public Member login(Member mem) {
		
		Member loginMem=memberRepository.findOneByUsername(mem.getUsername());
		//해당 아이디의 멤버가 없으면 로그인 실패
		if(loginMem==null) return null;
		else { //해당 아이디의 멤버가 있지만 비밀번호가 틀릴경우 로그인 실패
			if( loginMem.getPassword() !=mem.getPassword()) return null;
			else return loginMem;
		}
	}
	
	public boolean idCheck(Member mem) { //id 확인
		Member check = memberRepository.findOneByUsername(mem.getUsername());
		if (check != null) {  // check가 null이 아니라면 이미 존재 하는 아이디가 있다는 것이므로 null 을 반환
			return false;
		}
		else
			return true;
	}

}

package com.todolist.mks.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	@GetMapping(value="/") public String homeController() {
		//frontend => react로 개발한 SPA index.html 을 띄어줌  resources/static 안 index.html SPA
		return "index.html";
	}
}

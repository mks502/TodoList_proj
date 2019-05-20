package com.todolist.mks.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override   //개발시 React.js 자체 개발서버 3000포트와 tomcat 포트 8080이 달라 corsmapping 추가
    public void addCorsMappings(CorsRegistry registry) {
    	registry.addMapping("/**/**")
        .allowedOrigins("*")
        .allowedMethods("*")
        .allowedHeaders("*")
        .exposedHeaders("Content-Disposition")
        .allowCredentials(false).maxAge(3600);
    	}
}
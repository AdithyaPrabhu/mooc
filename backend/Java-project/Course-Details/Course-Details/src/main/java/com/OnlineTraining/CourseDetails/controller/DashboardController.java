package com.OnlineTraining.CourseDetails.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OnlineTraining.CourseDetails.model.DashboardTile;

@RestController
@RequestMapping("/api/v1/dashboard")
public class DashboardController {

	@GetMapping("/course-tiles")
	public List<DashboardTile> getDashboardTiles() {
		
		List<DashboardTile> courseTiles = new ArrayList<>();
		courseTiles.add(new DashboardTile("Introduction to Native Cloud Application Architecture",new String[] { "Linjith Kunnon", "Adithya Prabhu" },3,3000,"Build and deploy an app from the scratch completely on AWS", new String[] {"Architecture"},"Cloud native is an approach to building and running applications that fully exploit the advantages of the cloud computing model.","Basic",20,"1","https://container-solutions.com/content/uploads/2017/05/cloud.png"));
		courseTiles.add(new DashboardTile("JavaScript Design Patterns",new String[] { "Gokul", "MadhuBala" },5,5000,"Write better code by learning about the standard design patterns in JS",  new String[] {"Programming", "Low Level Architecture"},"Every developer strives to write maintainable, readable, and reusable code. Code structuring becomes more important as applications become larger. Design patterns prove crucial to solving this challenge - providing an organization structure for common issues in a particular circumstance.","Advanced",19,"2","https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"));
		courseTiles.add(new DashboardTile("Web Assembly",new String[] { "Gokul"},3,8000,"Introductory course to web assembly", new String[] {"Languages"},"WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.","Basic",29,"3","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Web_Assembly_Logo.svg/220px-Web_Assembly_Logo.svg.png"));
		courseTiles.add(new DashboardTile("Reactive Programming : A fad or the future",new String[] { "Adithya"},4,9000,"Why is it so cool among devs? Will it stick?", new String[] {"Languages"},"Reactive Programming is an asynchronous programming paradigm concerned with data streams and the propagation of change.","Advanced",13,"4","https://cdn-images-1.medium.com/max/1000/1*NkhhBPaaZXD9NSYC_xQ0LA.png"));
		courseTiles.add(new DashboardTile("Learn GoLang in 20 hours",new String[] { "Linjith Kunnon"},3,5000,"Go from zero to hero in Google\\'s GoLang in 30 hours",  new String[] {"Languages"},"Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.","Intermediate",10,"5","https://cdn-images-1.medium.com/max/1600/1*yh90bW8jL4f8pOTZTvbzqw.png"));
		courseTiles.add(new DashboardTile("Intro to AI/ML",new String[] { "Linjith Kunnon"},4,2000,"Introductory course to AI and ML using R",  new String[] {"AI"},"Artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and other animals.","Intermediate",23,"6","http://constems-ai.com/wp-content/uploads/2017/07/AI-and-ML-explained.jpg"));
		return courseTiles;
		
	}

}

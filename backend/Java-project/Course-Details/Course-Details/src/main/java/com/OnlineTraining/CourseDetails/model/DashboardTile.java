package com.OnlineTraining.CourseDetails.model;

public class DashboardTile {
	private String title;
	private String[] instructors;
	private int rating;
	private int price;
	private String summary;
	private String category;
	private String longDescription;
	private String difficulty;
	private int hours;
	private String courseId;
	private String imageUrl;

	public DashboardTile(String title, String[] instructors, int rating, int price, String summary, String category,
			String longDescription, String difficulty, int hours, String courseId, String imageUrl) {
		super();
		this.title = title;
		this.instructors = instructors;
		this.rating = rating;
		this.price = price;
		this.summary = summary;
		this.category = category;
		this.longDescription = longDescription;
		this.difficulty = difficulty;
		this.hours = hours;
		this.courseId = courseId;
		this.imageUrl = imageUrl;
	}
	
	public String getCourseId() {
		return courseId;
	}
	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getLongDescription() {
		return longDescription;
	}
	public void setLongDescription(String longDescription) {
		this.longDescription = longDescription;
	}
	public String[] getInstructors() {
		return instructors;
	}
	public void setInstructors(String[] instructors) {
		this.instructors = instructors;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDifficulty() {
		return difficulty;
	}
	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}
	public int getHours() {
		return hours;
	}
	public void setHours(int hours) {
		this.hours = hours;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
}

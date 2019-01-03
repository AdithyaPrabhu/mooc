import { Injectable } from '@angular/core';
import { CourseDetails } from 'src/app/body/course-details/course-details.model';

@Injectable()
export class CourseDetailsService {

    constructor() { }

    getCourseDetails(courseId: string): CourseDetails {
        return {
            'title': 'Introduction to Native Cloud Application Architecture',
            'instructors': [
                { 'instructorName': 'Linjith Kunnon', 'instructorId': '1' },
                { 'instructorName': 'Adithya Prabhu', 'instructorId': '2' }
            ],
            'rating': 3,
            'price': 3000,
            'summary': 'Build and deploy an app from the scratch completely on AWS',
            'category': 'Architecture',
            'longDescription': 'LOREM IPSUM',
            'difficulty': 'Basic',
            'hours': 20,
            'courseId': '1',
            'imageUrl': 'https://container-solutions.com/content/uploads/2017/05/cloud.png',
            'requirements': ['General idea about architecture patterns', 'Familiarity with AWS'],
            'featuredReviews': [
                { 'comment': 'Good Course', 'rating': 4, 'reviewBy': 'Rajiv Masand' },
                { 'comment': 'Worth the Money', 'rating': 1, 'reviewBy': 'HD Kumarswamy' },
                { 'comment': 'I listen to this everyday', 'rating': 3, 'reviewBy': 'Vijay Mallya' },
                { 'comment': 'Nominate the coder for a Nobel Prize', 'rating': 5, 'reviewBy': 'Kagna Runout' }
            ],
            'courseContent': [
                { 'topicHeading': 'Introduction', 'subtopics': ['what is meaning of native cloud', 'why native cloud'] },
                { 'topicHeading': 'Storage', 'subtopics': ['S3', 'Glacier'] },
                { 'topicHeading': 'Deployment', 'subtopics': ['Docker', 'Swarm'] }
            ],
            'totalSubscribers': 500
        };
    }
}

import { Injectable } from '@angular/core';
import { InstructorProfile } from './instructor-profile.model';

@Injectable()
export class InstructorProfileService {

    constructor() { }

    getInstructorDetails(instructorId: string): InstructorProfile {
        return {
            'name': 'Adithya Prabhu',
            'description': 'LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM',
            'totalStudents': 50000,
            'averageReview': 5,
            'expertise': ['JS', 'JAVA', 'Web Apps'],
            'courseIds': [
                { 'title': 'Java', 'id': '2' },
                { 'title': 'JS', 'id': '1' },
                { 'title': 'Angular', 'id': '3' }
            ],
            'profileLinks': [
                { 'title': 'GitHub', 'url': 'https://github.com/AdithyaPrabhu' }
            ],
            'publications': [
                { 'title': 'Geeks4Geeks', 'url': 'https://practice.geeksforgeeks.org/problems/jumping-numbers/0' },
                { 'title': 'Medium', 'url': 'https://medium.com/@ashan.fernando/upload-files-to-aws-s3-using-signed-urls-fa0a0cf489db' }
            ]
        };
    }
}

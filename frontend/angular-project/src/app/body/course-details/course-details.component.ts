import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetails } from 'src/app/body/course-details/course-details.model';
import { CourseDetailsService } from 'src/app/body/course-details/course-details.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseId: string;
  courseDetails: CourseDetails;
  constructor(private route: ActivatedRoute, private courseDetailsService: CourseDetailsService) { }

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('course_id');
    this.courseDetails = this.courseDetailsService.getCourseDetails(this.courseId);
  }

}

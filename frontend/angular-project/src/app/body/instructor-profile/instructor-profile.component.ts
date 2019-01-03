import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorProfileService } from './instructor-profile.service';
import { InstructorProfile } from './instructor-profile.model';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent implements OnInit {
  instructorProfile: InstructorProfile;
  instructorId: string;

  constructor(private route: ActivatedRoute, private instructorProfileService: InstructorProfileService) { }

  ngOnInit() {
    this.instructorId = this.route.snapshot.paramMap.get('instructor_id');
    this.instructorProfile = this.instructorProfileService.getInstructorDetails(this.instructorId);
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/body/dashboard/dashboard.component';
import { CourseDetailsComponent } from 'src/app/body/course-details/course-details.component';
import { InstructorProfileComponent } from 'src/app/body/instructor-profile/instructor-profile.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'course/:course_id', component: CourseDetailsComponent },
  { path: 'instructor/:instructor_id', component: InstructorProfileComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

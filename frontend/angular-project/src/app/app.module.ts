import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from 'src/app/body/dashboard/dashboard.component';
import { DashboardTileComponent } from 'src/app/body/dashboard/tile/dashboard-tile.component';
import { DashboardTableComponent } from 'src/app/body/dashboard/table/dashboard-table.component';
import { DashboardService } from 'src/app/body/dashboard/dashboard.service';
import { FileUploadComponent } from './body/file-upload/file-upload.component';
import { FileUploadModule, FileUpload } from 'primeng/components/fileupload/fileupload';
import { BodyComponent } from './body/body.component';
import { CourseDetailsComponent } from 'src/app/body/course-details/course-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseDetailsService } from 'src/app/body/course-details/course-details.service';
import { InstructorProfileComponent } from './body/instructor-profile/instructor-profile.component';
import { InstructorProfileService } from 'src/app/body/instructor-profile/instructor-profile.service';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailsHeaderComponent } from 'src/app/body/course-details/course-details-header/course-details-header.component';
import { CourseContentsComponent } from 'src/app/body/course-details/course-contents/course-contents.component';
import { CourseRequirementsComponent } from './body/course-details/course-requirements/course-requirements.component';
import { CourseReviewsComponent } from './body/course-details/course-reviews/course-reviews.component';
import { FeaturedReviewsComponent } from './body/course-details/course-reviews/featured-reviews/featured-reviews.component';
import { CourseRateCardComponent } from './body/course-details/course-rate-card/course-rate-card.component';
import { StarRatingComponent } from 'src/app/shared/components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardTileComponent,
    DashboardTableComponent,
    HeaderComponent,
    FileUploadComponent,
    BodyComponent,
    CourseDetailsComponent,
    InstructorProfileComponent,
    CourseDetailsHeaderComponent,
    CourseContentsComponent,
    CourseRequirementsComponent,
    CourseReviewsComponent,
    FeaturedReviewsComponent,
    CourseRateCardComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DashboardService,
    CourseDetailsService,
    InstructorProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

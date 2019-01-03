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
    InstructorProfileComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    AppRoutingModule
  ],
  providers: [
    DashboardService,
    CourseDetailsService,
    InstructorProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

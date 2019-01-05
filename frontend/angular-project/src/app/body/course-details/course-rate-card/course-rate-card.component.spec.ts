import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRateCardComponent } from './course-rate-card.component';

describe('CourseRateCardComponent', () => {
  let component: CourseRateCardComponent;
  let fixture: ComponentFixture<CourseRateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

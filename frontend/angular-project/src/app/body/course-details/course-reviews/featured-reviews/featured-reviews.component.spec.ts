import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedReviewsComponent } from './featured-reviews.component';

describe('FeaturedReviewsComponent', () => {
  let component: FeaturedReviewsComponent;
  let fixture: ComponentFixture<FeaturedReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

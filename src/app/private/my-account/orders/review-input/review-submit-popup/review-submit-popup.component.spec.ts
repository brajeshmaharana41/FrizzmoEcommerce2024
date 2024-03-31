import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSubmitPopupComponent } from './review-submit-popup.component';

describe('ReviewSubmitPopupComponent', () => {
  let component: ReviewSubmitPopupComponent;
  let fixture: ComponentFixture<ReviewSubmitPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewSubmitPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSubmitPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolVerifyComponent } from './school-verify.component';

describe('SchoolVerifyComponent', () => {
  let component: SchoolVerifyComponent;
  let fixture: ComponentFixture<SchoolVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

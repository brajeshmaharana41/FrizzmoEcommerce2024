import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferTeacherComponent } from './refer-teacher.component';

describe('ReferTeacherComponent', () => {
  let component: ReferTeacherComponent;
  let fixture: ComponentFixture<ReferTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

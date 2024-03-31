import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedTeachersComponent } from './invited-teachers.component';

describe('InvitedTeachersComponent', () => {
  let component: InvitedTeachersComponent;
  let fixture: ComponentFixture<InvitedTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitedTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

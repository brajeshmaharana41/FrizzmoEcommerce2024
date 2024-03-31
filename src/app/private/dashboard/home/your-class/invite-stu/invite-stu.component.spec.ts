import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStuComponent } from './invite-stu.component';

describe('InviteStuComponent', () => {
  let component: InviteStuComponent;
  let fixture: ComponentFixture<InviteStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

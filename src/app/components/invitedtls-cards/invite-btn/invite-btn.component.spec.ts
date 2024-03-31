import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteBtnComponent } from './invite-btn.component';

describe('InviteBtnComponent', () => {
  let component: InviteBtnComponent;
  let fixture: ComponentFixture<InviteBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

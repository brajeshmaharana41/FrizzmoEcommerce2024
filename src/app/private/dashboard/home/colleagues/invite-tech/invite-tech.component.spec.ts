import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTechComponent } from './invite-tech.component';

describe('InviteTechComponent', () => {
  let component: InviteTechComponent;
  let fixture: ComponentFixture<InviteTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteConformComponent } from './invite-conform.component';

describe('InviteConformComponent', () => {
  let component: InviteConformComponent;
  let fixture: ComponentFixture<InviteConformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteConformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteConformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

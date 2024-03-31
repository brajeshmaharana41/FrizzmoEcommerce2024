import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedtlsCardsComponent } from './invitedtls-cards.component';

describe('InvitedtlsCardsComponent', () => {
  let component: InvitedtlsCardsComponent;
  let fixture: ComponentFixture<InvitedtlsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitedtlsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedtlsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

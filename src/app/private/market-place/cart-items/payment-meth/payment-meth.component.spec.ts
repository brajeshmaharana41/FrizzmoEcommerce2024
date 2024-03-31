import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethComponent } from './payment-meth.component';

describe('PaymentMethComponent', () => {
  let component: PaymentMethComponent;
  let fixture: ComponentFixture<PaymentMethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

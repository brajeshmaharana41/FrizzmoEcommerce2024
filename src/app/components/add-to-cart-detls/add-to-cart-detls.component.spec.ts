import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartDetlsComponent } from './add-to-cart-detls.component';

describe('AddToCartDetlsComponent', () => {
  let component: AddToCartDetlsComponent;
  let fixture: ComponentFixture<AddToCartDetlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartDetlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartDetlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

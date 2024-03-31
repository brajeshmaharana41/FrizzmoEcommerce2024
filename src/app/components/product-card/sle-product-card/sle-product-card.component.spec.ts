import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleProductCardComponent } from './sle-product-card.component';

describe('SleProductCardComponent', () => {
  let component: SleProductCardComponent;
  let fixture: ComponentFixture<SleProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

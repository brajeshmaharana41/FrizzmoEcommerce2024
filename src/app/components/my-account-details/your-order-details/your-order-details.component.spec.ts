import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOrderDetailsComponent } from './your-order-details.component';

describe('YourOrderDetailsComponent', () => {
  let component: YourOrderDetailsComponent;
  let fixture: ComponentFixture<YourOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

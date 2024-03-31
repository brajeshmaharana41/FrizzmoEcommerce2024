import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOrderCardComponent } from './your-order-card.component';

describe('YourOrderCardComponent', () => {
  let component: YourOrderCardComponent;
  let fixture: ComponentFixture<YourOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourOrderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourClassComponent } from './your-class.component';

describe('YourClassComponent', () => {
  let component: YourClassComponent;
  let fixture: ComponentFixture<YourClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

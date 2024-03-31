import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBtnComponent } from './buttons-btn.component';

describe('ButtonsBtnComponent', () => {
  let component: ButtonsBtnComponent;
  let fixture: ComponentFixture<ButtonsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

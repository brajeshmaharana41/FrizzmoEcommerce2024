import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDilogComponent } from './submit-dilog.component';

describe('SubmitDilogComponent', () => {
  let component: SubmitDilogComponent;
  let fixture: ComponentFixture<SubmitDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitDilogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

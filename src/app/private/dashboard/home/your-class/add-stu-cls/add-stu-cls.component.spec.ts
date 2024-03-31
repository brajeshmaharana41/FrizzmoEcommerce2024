import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStuClsComponent } from './add-stu-cls.component';

describe('AddStuClsComponent', () => {
  let component: AddStuClsComponent;
  let fixture: ComponentFixture<AddStuClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStuClsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStuClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

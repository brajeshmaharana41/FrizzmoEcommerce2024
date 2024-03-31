import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewClsComponent } from './add-new-cls.component';

describe('AddNewClsComponent', () => {
  let component: AddNewClsComponent;
  let fixture: ComponentFixture<AddNewClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewClsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

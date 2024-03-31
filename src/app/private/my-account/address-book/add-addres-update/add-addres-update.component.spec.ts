import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddresUpdateComponent } from './add-addres-update.component';

describe('AddAddresUpdateComponent', () => {
  let component: AddAddresUpdateComponent;
  let fixture: ComponentFixture<AddAddresUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddresUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddresUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccontHeaderComponent } from './my-accont-header.component';

describe('MyAccontHeaderComponent', () => {
  let component: MyAccontHeaderComponent;
  let fixture: ComponentFixture<MyAccontHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccontHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccontHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

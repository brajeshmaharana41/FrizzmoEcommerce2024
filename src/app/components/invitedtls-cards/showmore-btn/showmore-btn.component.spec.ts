import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmoreBtnComponent } from './showmore-btn.component';

describe('ShowmoreBtnComponent', () => {
  let component: ShowmoreBtnComponent;
  let fixture: ComponentFixture<ShowmoreBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmoreBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmoreBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

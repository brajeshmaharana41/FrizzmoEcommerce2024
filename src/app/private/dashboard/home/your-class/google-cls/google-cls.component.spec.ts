import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleClsComponent } from './google-cls.component';

describe('GoogleClsComponent', () => {
  let component: GoogleClsComponent;
  let fixture: ComponentFixture<GoogleClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleClsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

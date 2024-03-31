import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUpdateClsComponent } from './re-update-cls.component';

describe('ReUpdateClsComponent', () => {
  let component: ReUpdateClsComponent;
  let fixture: ComponentFixture<ReUpdateClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReUpdateClsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReUpdateClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

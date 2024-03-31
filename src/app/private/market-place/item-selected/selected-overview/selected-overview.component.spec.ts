import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedOverviewComponent } from './selected-overview.component';

describe('SelectedOverviewComponent', () => {
  let component: SelectedOverviewComponent;
  let fixture: ComponentFixture<SelectedOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

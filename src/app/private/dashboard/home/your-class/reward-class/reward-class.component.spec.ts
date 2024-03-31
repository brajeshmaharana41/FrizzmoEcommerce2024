import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardClassComponent } from './reward-class.component';

describe('RewardClassComponent', () => {
  let component: RewardClassComponent;
  let fixture: ComponentFixture<RewardClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

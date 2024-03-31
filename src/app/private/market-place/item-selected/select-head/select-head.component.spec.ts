import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHeadComponent } from './select-head.component';

describe('SelectHeadComponent', () => {
  let component: SelectHeadComponent;
  let fixture: ComponentFixture<SelectHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

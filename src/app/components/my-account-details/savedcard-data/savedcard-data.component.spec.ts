import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcardDataComponent } from './savedcard-data.component';

describe('SavedcardDataComponent', () => {
  let component: SavedcardDataComponent;
  let fixture: ComponentFixture<SavedcardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedcardDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedcardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

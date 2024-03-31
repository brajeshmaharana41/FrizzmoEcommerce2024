import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShortPopupComponent } from './item-short-popup.component';

describe('ItemShortPopupComponent', () => {
  let component: ItemShortPopupComponent;
  let fixture: ComponentFixture<ItemShortPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemShortPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShortPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

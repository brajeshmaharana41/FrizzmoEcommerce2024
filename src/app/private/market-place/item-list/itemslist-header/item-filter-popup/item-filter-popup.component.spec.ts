import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilterPopupComponent } from './item-filter-popup.component';

describe('ItemFilterPopupComponent', () => {
  let component: ItemFilterPopupComponent;
  let fixture: ComponentFixture<ItemFilterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFilterPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

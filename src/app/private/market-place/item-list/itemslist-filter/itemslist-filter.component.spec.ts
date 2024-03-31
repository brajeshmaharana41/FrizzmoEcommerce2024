import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemslistFilterComponent } from './itemslist-filter.component';

describe('ItemslistFilterComponent', () => {
  let component: ItemslistFilterComponent;
  let fixture: ComponentFixture<ItemslistFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemslistFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemslistFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

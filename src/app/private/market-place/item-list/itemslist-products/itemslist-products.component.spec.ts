import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemslistProductsComponent } from './itemslist-products.component';

describe('ItemslistProductsComponent', () => {
  let component: ItemslistProductsComponent;
  let fixture: ComponentFixture<ItemslistProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemslistProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemslistProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

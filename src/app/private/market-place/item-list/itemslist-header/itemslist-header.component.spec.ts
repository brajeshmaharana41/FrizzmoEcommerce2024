import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemslistHeaderComponent } from './itemslist-header.component';

describe('ItemslistHeaderComponent', () => {
  let component: ItemslistHeaderComponent;
  let fixture: ComponentFixture<ItemslistHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemslistHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemslistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

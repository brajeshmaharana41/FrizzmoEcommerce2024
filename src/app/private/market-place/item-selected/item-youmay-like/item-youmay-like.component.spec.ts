import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemYoumayLikeComponent } from './item-youmay-like.component';

describe('ItemYoumayLikeComponent', () => {
  let component: ItemYoumayLikeComponent;
  let fixture: ComponentFixture<ItemYoumayLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemYoumayLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemYoumayLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

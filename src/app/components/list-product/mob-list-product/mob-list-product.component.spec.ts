import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobListProductComponent } from './mob-list-product.component';

describe('MobListProductComponent', () => {
  let component: MobListProductComponent;
  let fixture: ComponentFixture<MobListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobListProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

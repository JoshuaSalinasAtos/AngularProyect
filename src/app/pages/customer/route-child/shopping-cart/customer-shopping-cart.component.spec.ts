import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerShoppingCart } from './customer-shopping-cart.component';

describe('CustomerShoppingCart', () => {
  let component: CustomerShoppingCart;
  let fixture: ComponentFixture<CustomerShoppingCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerShoppingCart ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerShoppingCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

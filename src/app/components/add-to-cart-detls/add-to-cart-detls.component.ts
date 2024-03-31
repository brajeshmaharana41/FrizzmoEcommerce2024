import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface PeriodicElement {
  item: string;
  price: number;
  name: string;
  total: number;

}

@Component({
  selector: 'app-add-to-cart-detls',
  templateUrl: './add-to-cart-detls.component.html',
  styleUrls: ['./add-to-cart-detls.component.scss']
})

export class AddToCartDetlsComponent implements OnInit {
  @Input() cart_details : PeriodicElement;
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  @Input() index: number;
  public counter: number = 1;
  totalprice: any;

  public increment() {
    this.counter += 1;
    this.totalprice = this.cart_details.price*this.counter;
    this.parentFun.emit({ index: this.index, total: this.totalprice });
    console.log(this.totalprice)
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
      this.totalprice = this.cart_details.price*this.counter;
      this.parentFun.emit({ index: this.index, total: this.totalprice});
      console.log(this.totalprice)
    }
  } 
  constructor() {}

  ngOnInit(): void {
    this.totalprice = this.cart_details.price*this.counter;
    this.parentFun.emit({ index: this.index, total: this.totalprice});
  }
}

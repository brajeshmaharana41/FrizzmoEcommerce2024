import { Component, OnInit, Input } from '@angular/core';

export interface OrderDetails {
  image: string;
  price: number;
  quantity: number;
  total: number;
  title: string;
}

@Component({
  selector: 'app-your-order-details',
  templateUrl: './your-order-details.component.html',
  styleUrls: ['./your-order-details.component.scss']
})
export class YourOrderDetailsComponent implements OnInit {

  @Input() order_details : OrderDetails;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

export interface OrderDetails {
  image: string;
  price: number;
  quantity: number;
  total: number;
  title: string;
}

const OrderList: OrderDetails[] = [
  {image: '../../../../../assets/product4.png', price: 150, quantity: 1, total: 150, title: 'School Bag Canvas with Art Kit'},
  {image: '../../../../../assets/product5.png', price: 12, quantity: 2, total: 24, title: 'PARKER Vector Gold Pen'},
];

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  index = 3
  orderDatas = OrderList;
  
  constructor() { }

  ngOnInit(): void {
  }

}

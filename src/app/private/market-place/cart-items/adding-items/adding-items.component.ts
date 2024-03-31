import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AddToCartDetlsComponent } from 'src/app/components/add-to-cart-detls/add-to-cart-detls.component';

export interface PeriodicElement {
  item: string;
  price: number;
  name: string;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: '../../../../../assets/product4.png', price: 150, name: 'School Bag Canvas with Art Kit', total: 150},
  {item: '../../../../../assets/product5.png', price: 12,  name: 'PARKER Vector Gold Pen', total: 12},
];

@Component({
  selector: 'app-adding-items',
  templateUrl: './adding-items.component.html',
  styleUrls: ['./adding-items.component.scss']
})
export class AddingItemsComponent implements OnInit {
  dataSources = ELEMENT_DATA;
  grandtotal: number
  descount: number
  constructor() { }
  ngOnInit(): void {
  }
  parentFun($event: any){
    this.grandtotal = 0
    this.descount = 3
    this.dataSources[$event.index].total = $event.total
    this.dataSources.forEach(obj => this.grandtotal+=obj.total)
    this.grandtotal -= this.descount
  } 
}

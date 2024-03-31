import { Component, OnInit } from '@angular/core';

export interface MostPopular {
  image: string;
  title: string;
  subtitle: string;
  price: number;
}

const ViewProduct: MostPopular[] = [
  { image: '../../../../assets/product1.png', title: 'Funblast Bag', price: 120, subtitle: 'Sky blue canvas'},
  { image: '../../../../assets/product5.png', title: 'Plastic Pencil Box', price: 25,  subtitle: '(Set of 1, Pink)'},
  { image: '../../../../assets/product3.png', title: 'Cello Colorup Kit', price: 18,  subtitle: 'Celebration kit - Gift pack'},
  { image: '../../../../assets/product4.png', title: 'School Bag', price: 150,  subtitle: 'Canvas Bag with Pen kit'},
]
@Component({
  selector: 'app-most-viewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.scss']
})
export class MostViewedComponent implements OnInit {
  productViews = ViewProduct;
  constructor() { }

  ngOnInit(): void {
  }

}

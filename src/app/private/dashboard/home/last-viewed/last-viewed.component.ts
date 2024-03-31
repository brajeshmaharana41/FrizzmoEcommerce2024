import { Component, OnInit } from '@angular/core';

export interface MostPopular {
  image: string;
  title: string;
  subtitle: string;
  price: number;
}

const ViewProduct: MostPopular[] = [
  { image: '../../../../assets/product8.png', title: 'Single line Noteb…', price: 34, subtitle: 'Pack of 6 pieces'},
  { image: '../../../../assets/product7.png', title: 'Classmate Nootb..', price: 60,  subtitle: 'Pack of 12 Notebooks'},
  { image: '../../../../assets/product6.png', title: 'Book Size Nootb…', price: 20,  subtitle: 'Single line'},
  { image: '../../../../assets/product2.png', title: 'PARKER Gold Pen', price: 12,  subtitle: 'Customer ID#01221'},
];
@Component({
  selector: 'app-last-viewed',
  templateUrl: './last-viewed.component.html',
  styleUrls: ['./last-viewed.component.scss']
})
export class LastViewedComponent implements OnInit {
  productViews = ViewProduct;
  constructor( ) { 
   } 
  
  ngOnInit(): void {
    
  }

}
 
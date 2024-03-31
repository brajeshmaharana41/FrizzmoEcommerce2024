import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ListProductData {
  image: string;
  title: string;
  subtitle: string;
  description: string;

  reviews: number;
  offers: number;
  rating : number;
  price: number;

  favorite: string;
  button_btn: string;
}


@Component({
  selector: 'app-mob-list-product',
  templateUrl: './mob-list-product.component.html',
  styleUrls: ['./mob-list-product.component.scss']
})
export class MobListProductComponent implements OnInit {

  @Input() listProduct : ListProductData;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }
  
  ngOnInit(): void {
  }
  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

}

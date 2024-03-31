import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface MostPopular {
  image: string;
  title: string;
  subtitle: string;
  price: number;
}
export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'like-btn', btn_name: 'Add To Cart'},
]

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  btn_infos = ButtonInfo;


  @Input() product : MostPopular;
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

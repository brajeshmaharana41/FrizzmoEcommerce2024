import { Component, OnInit, Input } from '@angular/core';

export interface YourOrdercard {
  image: string;
  title: string;
  date: string;
  total: number;
  item: string;
  track: string;
  details: string;
  reviewStates: string;
}

@Component({
  selector: 'app-your-order-card',
  templateUrl: './your-order-card.component.html',
  styleUrls: ['./your-order-card.component.scss']
})
export class YourOrderCardComponent implements OnInit {
  @Input() yourOrder_Data : YourOrdercard;

  constructor() { }

  ngOnInit(): void {
  }

}

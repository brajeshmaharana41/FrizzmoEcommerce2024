import { Component, OnInit, Input } from '@angular/core';

export interface overviewData {
  icon: string;
  title: string;
  price: string;
  iconcol: string;
}
@Component({
  selector: 'app-overview-cards',
  templateUrl: './overview-cards.component.html',
  styleUrls: ['./overview-cards.component.scss']
})
export class OverviewCardsComponent implements OnInit {

  @Input() walletData : overviewData;

  constructor() { }

  ngOnInit(): void {
  }

}

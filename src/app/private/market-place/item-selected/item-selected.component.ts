import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSelectedComponent implements OnInit {
  item: string[] = ['Grey', 'Red', 'Yellow'];
  index = 2
  constructor() { }

  ngOnInit(): void {
  }
  description(){
    document.getElementById("description")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  options(){
    document.getElementById("options")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  pricelist(){
    document.getElementById("pricelist")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  overview(){
    document.getElementById("overview")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  reviews(){
    document.getElementById("reviews")?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}

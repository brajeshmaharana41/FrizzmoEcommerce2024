import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemslist-filter',
  templateUrl: './itemslist-filter.component.html',
  styleUrls: ['./itemslist-filter.component.scss']
})
export class ItemslistFilterComponent implements OnInit {

  panelOpenState = true;
  pageSize = 8
  lastindex = 0
  activeState = '';
  seasons: string[] = ['200 Above', '100 to 200', '50 to 100', 'Under 25'];
  brands: string[] = ['Apsara','Classmate','Cross','Parker','Reynolds','Waterman','ZesTale','4Ever','Parker','Reynolds','Waterman','ZesTale','4Ever'];
  colors: string[] = [ 'Coffee','Grey','Ivory','Pink','Red','Yellow','Grey','Ivory','Pink','Red','Yellow'];
  constructor() { }

  ngOnInit(): void {
  }
  setStateAsActive(state: any) {
    this.activeState = state;
  }
}

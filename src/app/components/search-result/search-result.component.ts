import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemFilterPopupComponent } from 'src/app/private/market-place/item-list/itemslist-header/item-filter-popup/item-filter-popup.component';
import { ItemShortPopupComponent } from 'src/app/private/market-place/item-list/itemslist-header/item-short-popup/item-short-popup.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor( public dialog: MatDialog,) { }
  openshortDialog(){
    this.dialog.open(ItemShortPopupComponent, {
      width: '250px',
    });
  }

  opensfilterDialog(){
    this.dialog.open(ItemFilterPopupComponent, {
      height: '600px',
      width: '300px', 
    });
  }
  ngOnInit(): void {
  }

}

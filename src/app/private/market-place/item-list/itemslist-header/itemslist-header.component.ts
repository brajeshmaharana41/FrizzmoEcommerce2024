import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemShortPopupComponent } from './item-short-popup/item-short-popup.component';
import { ItemFilterPopupComponent } from './item-filter-popup/item-filter-popup.component'
@Component({
  selector: 'app-itemslist-header',
  templateUrl: './itemslist-header.component.html',
  styleUrls: ['./itemslist-header.component.scss']
})
export class ItemslistHeaderComponent implements OnInit {

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

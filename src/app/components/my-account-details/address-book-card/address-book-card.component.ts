import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddAddresUpdateComponent } from 'src/app/private/my-account/address-book/add-addres-update/add-addres-update.component';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';

export interface AddresList {
  name: string;
  address: string;
  house: string;
  contry: string;
  pincode: string;
  city: string;
  state: string;
  title: string;
}

@Component({
  selector: 'app-address-book-card',
  templateUrl: './address-book-card.component.html',
  styleUrls: ['./address-book-card.component.scss']
})
export class AddressBookCardComponent implements OnInit {

  @Input() address_details : AddresList;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DeleteDialogComponent, {
      width: '350px',
    });
  }

  openDialogs() {
    this.dialog.open(AddAddresUpdateComponent, {
      height: '650px',
      width: '900px',
    });
  }
}

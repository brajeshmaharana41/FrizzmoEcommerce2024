import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddAddressBookComponent } from '../address-book/add-address-book/add-address-book.component'

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

const ListAddress: AddresList[] = [
  { 
    name: 'Jory Lenz',
    address: '2224 Boone Crockett Lane',
    house: 'Flat 7',
    contry: 'Negreet',
    pincode: 'Louisiana',
    city: '71460',
    state: 'United States',
    title: 'Shipping address',
  },
  { 
    name: 'Jory Lenz',
    address: '2224 Boone Crockett Lane',
    house: 'Flat 7',
    contry: 'Negreet',
    pincode: 'Louisiana',
    city: '71460',
    state: 'United States',
    title: 'Shipping address',
  },
  { 
    name: 'Jory Lenz',
    address: '2224 Boone Crockett Lane',
    house: 'Flat 7',
    contry: 'United States',
    pincode: '71460',
    city: 'Louisiana',
    state: 'Negreet',
    title: 'Shipping address',
  },
];
@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  addressDatas = ListAddress;
  index = 3

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddAddressBookComponent, {
      height: '650px',
      width: '900px',
    });
  }

  ngOnInit(): void {
  }

}

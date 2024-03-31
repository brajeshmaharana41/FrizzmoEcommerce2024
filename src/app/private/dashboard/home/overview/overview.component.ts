import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';
export interface overviewData {
  icon: string;
  title: string;
  price: string;
  iconcol: string;
}

const ViewData: overviewData[] = [
  { icon: 'attach_money', title: 'Wallet Balance', price: "100 FC", iconcol: 'view-btn'},
  { icon: 'money_off', title: 'Amount Used', price: "10 FC",  iconcol: 'view-btn'},
  { icon: 'account_balance_wallet', title: 'Remaining in wallet', price: "90 FC",  iconcol: 'view-btn'},
  { icon: 'shopping_cart', title: 'Total Orders', price: "2",  iconcol: 'view-btn'},
];
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
  range: any
  overViewinfos = ViewData;
  today = new Date();
  currentdate = this.today.getDate();
  month = this.today.getMonth();
  year = this.today.getFullYear();
  
  constructor(public datepipe: DatePipe) { }
  
  ngOnInit(): void {
    this.range = new FormGroup({
      start: new FormControl(this.datepipe.transform((new Date), 'dd/MM/yyyy')),
      end: new FormControl(),
    });
  }

  ChangeDate(days: any){
    const currentweek = this.today.getDate() - days;
    console.log("hi", currentweek)
    this.range = new FormGroup({
      start: new FormControl(new Date(this.year, this.month, this.currentdate)),
      end: new FormControl(new Date(this.year, this.month, currentweek)),
    });
    console.log('Hello', this.range)
  }
}

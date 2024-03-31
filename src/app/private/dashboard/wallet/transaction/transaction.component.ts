import { Component, OnInit } from '@angular/core';
export interface WalletModal {
  icon: string;
  name: string;
  date: string;
  price: string;
  succescolor: string;
 }
 
 const TransactionData: WalletModal[] = [
  {icon: 'arrow_upward', name: 'Order ID - FRI000123', price: '-3 FC', date: 'Jun 12, 2021', succescolor: 'tanprice'},
  {icon: 'arrow_upward', name: 'Order ID -  FRI000124', price: '-2 FC', date: 'Jun 12, 2021', succescolor: 'tanprice'},
  {icon: 'arrow_upward', name: 'Order ID -  FRI000125', price: '-3 FC', date: 'May 15, 2021', succescolor: 'tanprice'},
  {icon: 'arrow_upward', name: 'Order ID -  FRI000129', price: '-2 FC', date: 'May 12, 2021', succescolor: 'tanprice'},
  {icon: 'account_balance_wallet', name: 'Added in Wallet (June 2021)', price: '100 FC', date: 'Jun 01, 2021', succescolor: 'tanpricecolor'},
 ];
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  dataSource = TransactionData;
  constructor() { }

  ngOnInit(): void {
  }
}

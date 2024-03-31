import { Component, OnInit, Input } from '@angular/core';

export interface AccountData {
  icon: string;
  title: string;
  subtitle: string;
  inv_btn: string;
  inv_title: string;
  account_rout: string;
}

@Component({
  selector: 'app-my-account-details',
  templateUrl: './my-account-details.component.html',
  styleUrls: ['./my-account-details.component.scss']
})
export class MyAccountDetailsComponent implements OnInit {

  @Input() myAccount_Data : AccountData;

  constructor() { }

  ngOnInit(): void {
  }
}

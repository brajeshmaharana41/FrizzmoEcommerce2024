import { Component, OnInit } from '@angular/core';

export interface AccountData {
  icon: string;
  title: string;
  subtitle: string;
  inv_btn: string;
  inv_title: string;
  account_rout: string;
}

const MyAccountDetail: AccountData[] = [
  { icon: 'add_shopping_cart', title: 'Your Orders', inv_btn: '', subtitle: 'Track your order or create a return', inv_title: '', account_rout: '/my-account/orders'},
  { icon: 'perm_identity', title: 'Account Details', inv_btn: '',  subtitle: 'Change your sign in information', inv_title: '', account_rout: '/my-account/account-details'},
  { icon: 'bookmark_border', title: 'Address Book', inv_btn: '',  subtitle: 'Manage your adddress', inv_title: '', account_rout: '/my-account/address-book'},
  { icon: 'credit_card', title: 'Saved Cards', inv_btn: '',  subtitle: 'View and delete your payment details', inv_title: '', account_rout: '/my-account/savedcard'}, 
  { icon: 'mail_outline', title: 'Marketing Preferences', inv_btn: '',  subtitle: 'Tailor your email preferences for us', inv_title: '', account_rout: '/my-account/preferences'}, 
  { icon: 'share', title: 'Refer a Teacher', inv_btn: 'account-btn',  subtitle: '20% off for you and 20% off for your colleagues', inv_title: 'Refer Now', account_rout: '/my-account/refer'},
]
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  accountDetails = MyAccountDetail;
  index = 3

  constructor() { }

  ngOnInit(): void {
  }

}

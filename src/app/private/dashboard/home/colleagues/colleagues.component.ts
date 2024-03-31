import { Component, OnInit } from '@angular/core';

export interface InviteInfo {
  label: string;
  title: string;
  subtitle: string;
  schoolname: string
  btnclor: string;
  btn: string;
}

const inviePending: InviteInfo[] = [
  { label: 'AD', title: 'Andre Doumad', btnclor: 'refer-btn',  subtitle: 'Invited', btn: 'Pending', schoolname:''},
  { label: 'AK', title: 'Andre Korchagin', btnclor: 'refer-btns',  subtitle: 'Invited', btn: 'Invite Again', schoolname:''},
  { label: 'FB', title: 'Frac Brodai', btnclor: 'refer-btns',  subtitle: 'Invited', btn: 'Invite Again', schoolname:''},
];

const inviteConform: InviteInfo[] = [
  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'Liberal Arts and Science Academy High School'},
];
@Component({
  selector: 'app-colleagues',
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.scss']
})
export class ColleaguesComponent implements OnInit {
  
  techpendings = inviePending;

  techconforms = inviteConform;

  constructor() { }

  ngOnInit(): void {
  }
}

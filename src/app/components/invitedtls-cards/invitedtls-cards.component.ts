import { Component, OnInit, Input } from '@angular/core';

export interface InviteInfo {
  label: string;
  title: string;
  subtitle: string;
  schoolname: string
  btnclor: string;
  btn: string;

}

@Component({
  selector: 'app-invitedtls-cards',
  templateUrl: './invitedtls-cards.component.html',
  styleUrls: ['./invitedtls-cards.component.scss']
})
export class InvitedtlsCardsComponent implements OnInit {
  @Input() invitepending : InviteInfo;

  constructor() { }

  ngOnInit(): void {
  }

}

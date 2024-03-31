import { Component, Input, OnInit } from '@angular/core';

export interface InviteInfo {
  label: string;
  title: string;
  subtitle: string;
  schoolname: string
  btnclor: string;
  btn: string;
}

@Component({
  selector: 'app-invite-conform',
  templateUrl: './invite-conform.component.html',
  styleUrls: ['./invite-conform.component.scss'],
  
})
export class InviteConformComponent implements OnInit {
  @Input() inviteconform : InviteInfo;

  constructor() { }

  ngOnInit(): void {
  }

}

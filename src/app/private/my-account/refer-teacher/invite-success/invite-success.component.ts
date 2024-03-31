import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}
const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'Back To Home'},
]
@Component({
  selector: 'app-invite-success',
  templateUrl: './invite-success.component.html',
  styleUrls: ['./invite-success.component.scss']
})
export class InviteSuccessComponent implements OnInit {
  index = 3
  btn_infos = ButtonInfo;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}

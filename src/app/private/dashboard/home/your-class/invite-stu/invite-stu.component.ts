import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-stu',
  templateUrl: './invite-stu.component.html',
  styleUrls: ['./invite-stu.component.scss']
})
export class InviteStuComponent implements OnInit {
  urlvalue = 
  `https://invite.frizzmo.com`;
  constructor() { }

  ngOnInit(): void {
  }
  onCopy(){
    alert("Link Copied")
  }
}

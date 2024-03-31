import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InviteTechComponent } from '../../../private/dashboard/home/colleagues/invite-tech/invite-tech.component'

@Component({
  selector: 'app-invite-btn',
  templateUrl: './invite-btn.component.html',
  styleUrls: ['./invite-btn.component.scss']
})
export class InviteBtnComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(InviteTechComponent, {
      height: '630px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}

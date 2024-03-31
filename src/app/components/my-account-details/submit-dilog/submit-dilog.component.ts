import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ReviewSubmitPopupComponent } from 'src/app/private/my-account/orders/review-input/review-submit-popup/review-submit-popup.component';

@Component({
  selector: 'app-submit-dilog',
  templateUrl: './submit-dilog.component.html',
  styleUrls: ['./submit-dilog.component.scss']
})
export class SubmitDilogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  submitDialog() {
    const dialogRef = this.dialog.open(ReviewSubmitPopupComponent , {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

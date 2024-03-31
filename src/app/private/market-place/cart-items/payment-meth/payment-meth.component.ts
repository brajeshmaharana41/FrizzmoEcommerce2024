import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCardDetailsComponent } from 'src/app/private/my-account/payment-card/add-card-details/add-card-details.component';

@Component({
  selector: 'app-payment-meth',
  templateUrl: './payment-meth.component.html',
  styleUrls: ['./payment-meth.component.scss']
})
export class PaymentMethComponent implements OnInit {

  panelOpenState = false;
  choosenCard: any = '4887'

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AddCardDetailsComponent, {
      height: '550px',
      width: '800px',
    });
  }

  onChooseCard(card: any) {
    this.choosenCard = card
    this.panelOpenState = false
  }

}

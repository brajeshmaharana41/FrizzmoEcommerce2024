import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-savedcard-data',
  templateUrl: './savedcard-data.component.html',
  styleUrls: ['./savedcard-data.component.scss']
})
export class SavedcardDataComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DeleteDialogComponent, {
      width: '350px',
    });
  }
}

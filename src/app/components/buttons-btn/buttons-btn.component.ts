import { Component, OnInit, Input } from '@angular/core';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}


@Component({
  selector: 'app-buttons-btn',
  templateUrl: './buttons-btn.component.html',
  styleUrls: ['./buttons-btn.component.scss']
})
export class ButtonsBtnComponent implements OnInit {
  
  @Input() btn_Data : ButtonData;

  constructor() { }

  ngOnInit(): void {
  }

}

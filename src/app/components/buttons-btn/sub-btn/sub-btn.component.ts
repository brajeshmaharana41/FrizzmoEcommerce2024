import { Component, OnInit, Input } from '@angular/core';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}
@Component({
  selector: 'app-sub-btn',
  templateUrl: './sub-btn.component.html',
  styleUrls: ['./sub-btn.component.scss']
})
export class SubBtnComponent implements OnInit {
  @Input() btn_Data : ButtonData;

  constructor() { }

  ngOnInit(): void {
  }

}

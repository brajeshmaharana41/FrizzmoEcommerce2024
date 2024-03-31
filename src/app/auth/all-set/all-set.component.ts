import { Component, OnInit } from '@angular/core';


export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'Let’s Get Started'},
]
@Component({
  selector: 'app-all-set',
  templateUrl: './all-set.component.html',
  styleUrls: ['./all-set.component.scss']
})
export class AllSetComponent implements OnInit {
  btn_infos = ButtonInfo;

  constructor() { }

  ngOnInit(): void {
  }

}

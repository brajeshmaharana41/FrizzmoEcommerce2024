import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite-tech',
  templateUrl: './invite-tech.component.html',
  styleUrls: ['./invite-tech.component.scss']
})
export class InviteTechComponent implements OnInit {
  invitetechForm : FormGroup
  urlvalue = 
  `https://invite.frizzmo.com`;
  constructor() { }

  ngOnInit(): void {
    this.invitetechForm = new FormGroup({
      techname: new FormControl('', [Validators.required]),

      techemail: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    })
  }
  onClickSubmit(invitetechForm: any){
    console.log('Forgot Password', invitetechForm)
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.invitetechForm.controls[controlName].hasError(errorName);
    }
    onCopy(){
      alert("Link Copied")
    }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'VERIFY'},
]
@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.scss']
})
export class ResetEmailComponent implements OnInit {
  btn_infos = ButtonInfo;
  resetEmail: any

constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.resetEmail = new FormGroup({
      codePin: new FormControl('', [  Validators.required, 
                                      Validators.maxLength(6),
                                      Validators.pattern(/(\(?[0-9]{3}\)?-?\s?[0-9]{3})/)
                                    ]),
    })
  }

  onClickSubmit(resetEmail: any){
    console.log('6-digit code', resetEmail)
    this.router.navigate(['/forgot/reset-email/reset'])
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.resetEmail.controls[controlName].hasError(errorName);
    }
}

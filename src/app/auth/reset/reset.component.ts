import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matchValidator } from '../Validation/confirmed.validator';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'VERIFY'},
]
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  btn_infos = ButtonInfo;

  hide = true;

  chide = true;

  resetPassword: any  

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.resetPassword = new FormGroup({
      password: new FormControl('', [Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}'),
        Validators.minLength(8),
        Validators.maxLength(20),
        matchValidator('confirmPassword', true)]),

      confirm_password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}'),
        matchValidator('password')
      ]),
    }, passwordMatchValidator)
  }

  onClickSubmit(resetPassword: any){
    console.log('reset password', resetPassword)
    // this.router.navigate(['/'])
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.resetPassword.controls[controlName].hasError(errorName);
    }
    passwordErrorMatcher = {
      isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
        const controlInvalid = control.touched && control.invalid;
        const formInvalid = control.touched && this.resetPassword.get('confirm_password').touched && this.resetPassword.invalid;
        return controlInvalid || formInvalid;
      }
    }
  
    confirmErrorMatcher = {
      isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
        const controlInvalid = control.touched && control.invalid;
        const formInvalid = control.touched && this.resetPassword.get('password').touched && this.resetPassword.invalid;
        return controlInvalid || formInvalid;
      }
    }
  
    getErrorMessage(controlName: string) {
      if (this.resetPassword.controls[controlName].hasError('minlength')) {
        return 'Password must Includes upper & lower case with special character and numbers'
      }
  
      return 'Passwords must match'
    }
  
  }
  
  function passwordMatchValidator(g: any) {
    const password = g.get('password').value;
    const confirm = g.get('confirm_password').value
    return password === confirm ? null : { mismatch: true };
  }
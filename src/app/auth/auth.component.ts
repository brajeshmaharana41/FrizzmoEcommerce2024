import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { matchValidator } from './Validation/confirmed.validator';
// import { PasswordValidation } from './Validation/confirmed.validator';

export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'auth_btn', btn_name: 'SIGN UP'},
]
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  btn_infos = ButtonInfo;

  signUpForm: any;

  signInForm: any;

  signinpasswordhide = true;
  hide = true;
  passwordhide = true;
  conformpasswordhide = true;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.signUpForm = new FormGroup({
  
        firstName: new FormControl('', [Validators.required]),
  
        lastName: new FormControl('', [Validators.required,]),
  
        password: new FormControl('', [ Validators.required,    
                                        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}'),
                                        Validators.minLength(8),
                                        Validators.maxLength(20),
                                      ]),
        confirmpassword: new FormControl('', [
                                          Validators.required,
        ]),
      },passwordMatchValidator)
  
      this.signInForm = new FormGroup({
        signInemail : new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
        signInpassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}'),
        Validators.minLength(8),
        Validators.maxLength(20)]),
      })
  }
  public SignUpError = (controlName: string, errorName: string) =>{
    return this.signUpForm.controls[controlName].hasError(errorName);
    }
  public SignInError = (controlName: string, errorName: string) =>{
    return this.signInForm.controls[controlName].hasError(errorName);
    }

  onClicksignUpSubmit(Updata: any){
    console.log('sign Up', Updata)
  }
  onClicksignInSubmit(signInForm: any){
    console.log('sign In', signInForm)
  }

  passwordErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid = control.touched && this.signUpForm.get('confirmpassword').touched && this.signUpForm.invalid;
      return controlInvalid || formInvalid;
    }
  }

  confirmErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid = control.touched && this.signUpForm.get('password').value != this.signUpForm.get('confirmpassword').value;
      return controlInvalid || formInvalid;
    }
  }

  getErrorMessage(controlName: string) {
    if (this.signUpForm.controls[controlName].hasError('minlength')) {
      return 'Password must Includes upper & lower case with special character and numbers'
    }
    const password = this.signUpForm.get('password').value
    const confirm = this.signUpForm.get('confirmpassword').value
    return password === confirm ? null : 'Passwords must match';
  }

}

function passwordMatchValidator(g: any) {
  const password = g.get('password').value;
  const confirm = g.get('confirmpassword').value
  return password === confirm ? null : { mismatch: true };
}

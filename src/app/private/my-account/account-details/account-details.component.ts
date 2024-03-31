import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
export interface ButtonData {
  clsname: string;
  btn_name: string;
}

const ButtonInfo: ButtonData[] = [
  { clsname: 'details-btn', btn_name: 'Update'},
]
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  index = 3
  btn_infos = ButtonInfo;
  format: any;
  url: any;
  EditPersonalDetails: FormGroup;

  EditEmailDetails: FormGroup;

  EditschoolEmailDetails: FormGroup;

  passwordchange: any;

  hide = true;

  showEdit: boolean = false ;

  showprslEmail: boolean = false ;

  showschoolEmail: boolean = false ;

  showPassword: boolean = false ;


  dataimage = '';


   @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';
  conformpasswordhide = true;

  toggle_nameShow() {

    this.showEdit = ! this.showEdit;

  }

  toggle_prslShow() {

    this.showprslEmail = ! this.showprslEmail;

  }

  toggle_schollShow() {

    this.showschoolEmail = ! this.showschoolEmail;

  }

  toggle_passwordShow() {

    this.showPassword = ! this.showPassword;

  }
  constructor() { }

  ngOnInit(): void {
    this.EditPersonalDetails = new FormGroup({
  
      firstname: new FormControl('', [Validators.required]),

      lastname: new FormControl('', [Validators.required]),

      date: new FormControl('', Validators.required),

    })
    this.EditEmailDetails = new FormGroup({
  
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),

    })
    this.EditschoolEmailDetails = new FormGroup({
  
      shoolemail: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),

    })

    this.passwordchange = new FormGroup({
      password: new FormControl('', [ Validators.required,    
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}'),
        Validators.minLength(8),
        Validators.maxLength(20)
      ]),
      confirmpassword: new FormControl('', [Validators.required]),
    }, passwordMatchValidator)

  }

  public myError = (controlName: string, errorName: string) =>{
    return this.EditPersonalDetails.controls[controlName].hasError(errorName);
    }
  public emailErrors = (controlName: string, errorName: string) =>{
    return this.EditEmailDetails.controls[controlName].hasError(errorName);
    }
  public schoolemailErrors = (controlName: string, errorName: string) =>{
    return this.EditschoolEmailDetails.controls[controlName].hasError(errorName);
    }
  public passwordError = (controlName: string, errorName: string) =>{
    return this.passwordchange.controls[controlName].hasError(errorName);
    }
  

  onClickSubmit(cardDetails: any){
    console.log('Card Details', cardDetails)
  }

   uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(imgFile.target.files[0]);

      reader.onload = (imgFile: any) => { 
        this.dataimage = imgFile.target.result;
      }
    }
  }

  public SignUpError = (controlName: string, errorName: string) =>{
    return this.passwordchange.controls[controlName].hasError(errorName);
  }

  getErrorMessage(controlName: string) {
    if (this.passwordchange.controls[controlName].hasError('minlength')) {
      return 'Password must Includes upper & lower case with special character and numbers'
    }
    return 'Passwords must match'
  }

  confirmErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid = control.touched && this.passwordchange.get('password').touched && this.passwordchange.invalid;
      return controlInvalid || formInvalid;
    }
  }

}

function passwordMatchValidator(g: any) {
  const password = g.get('password').value;
  const confirm = g.get('confirmpassword').value
  return password === confirm ? null : { mismatch: true };
}
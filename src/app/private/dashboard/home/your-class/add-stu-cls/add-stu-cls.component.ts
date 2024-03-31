import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stu-cls',
  templateUrl: './add-stu-cls.component.html',
  styleUrls: ['./add-stu-cls.component.scss']
})
export class AddStuClsComponent implements OnInit {

  studentForm : any

  constructor() { }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    })
  }
  onClickSubmit(studentForm: any){
    console.log('Student Details', studentForm)
  }
  public studentError = (controlName: string, errorName: string) =>{
    return this.studentForm.controls[controlName].hasError(errorName);
    }
}

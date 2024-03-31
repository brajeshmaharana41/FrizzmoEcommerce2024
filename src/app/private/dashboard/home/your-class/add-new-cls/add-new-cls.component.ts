import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-cls',
  templateUrl: './add-new-cls.component.html',
  styleUrls: ['./add-new-cls.component.scss']
})
export class AddNewClsComponent implements OnInit {

  classForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForms()
  }

  initForms() {
    this.classForm = this.formBuilder.group({ name: ["", [Validators.required]] })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-addres-update',
  templateUrl: './add-addres-update.component.html',
  styleUrls: ['./add-addres-update.component.scss']
})
export class AddAddresUpdateComponent implements OnInit {
  public addressDetails: FormGroup;
  options: string[] = [ 'US'];

  constructor() { }

  ngOnInit(): void {
    this.addressDetails = new FormGroup({
  
      schoolname: new FormControl('', [Validators.required]),

      address1: new FormControl('', [Validators.required]),

      city: new FormControl('', [Validators.required]),

      states: new FormControl('', [Validators.required]),

      country: new FormControl('', [Validators.required]),

      postalcode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.addressDetails.controls[controlName].hasError(errorName);
    }

  onClickSubmit(addressDetails: any){
    console.log('Card Details', addressDetails)
  }
}

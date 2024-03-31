import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {
  public delivery_addressDetails: FormGroup;

  country: string[] = [
    'US',
  ];

  states: string[] = [
    'New YORK',
  ];

  city: string[] = [
    'City',
  ];

  constructor() { }

  ngOnInit(): void {
    this.delivery_addressDetails = new FormGroup({
  
      firstname: new FormControl('', [Validators.required]),

      lastname: new FormControl('', [Validators.required]),

      address: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),

      city: new FormControl('', [Validators.required]),

      states: new FormControl('', [Validators.required]),

      country: new FormControl('', [Validators.required]),

      postalcode: new FormControl('', [ Validators.required, 
                                        Validators.minLength(6),
                                      ]),

      phone: new FormControl('', [Validators.required]),

    })
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.delivery_addressDetails.controls[controlName].hasError(errorName);
    }
  onClickSubmit(delivery_addressDetails: any){
    console.log('Card Details', delivery_addressDetails)
  }

}

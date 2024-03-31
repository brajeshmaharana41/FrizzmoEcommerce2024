import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { GApiService } from 'src/app/private/dashboard/home/your-class/g-api-services/g-api.service';

@Component({
  selector: 'app-add-address-book',
  templateUrl: './add-address-book.component.html',
  styleUrls: ['./add-address-book.component.scss']
})
export class AddAddressBookComponent implements OnInit {

  public addressDetails: FormGroup;
  statesData: string[] = [];
  country: string[] = ['US'];
  mapsOptions: any = {
    types: [],
    componentRestrictions: { country: 'US' }
  }

  constructor() { }

  ngOnInit(): void {
    this.addressDetails = new FormGroup({
      schoolname: new FormControl('', [Validators.required]),
      address1: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      states: new FormControl('', [Validators.required]),
      country: new FormControl('US', [Validators.required]),
      postalcode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }
  public myError = (controlName: string, errorName: string) => {
    return this.addressDetails.controls[controlName].hasError(errorName);
  }

  onClickSubmit(addressDetails: any) {
    console.log('Card Details', addressDetails)
  }

  handleAddressChange(event: any): void {

    let address = {
      city: '',
      state: '',
      postal_code: ''
    }

    for (const iterator of event.address_components) {

      let types = iterator.types;

      for (const type of types) {
        if (type == 'postal_code') {
          address.postal_code = iterator.short_name;
        } else if (type == 'locality') {
          address.city = iterator.long_name;
        } else if (type == 'administrative_area_level_1') {
          address.state = iterator.long_name;
        }
      }

    }

    this.statesData = [address.state]

    this.addressDetails.patchValue({
      city: address.city,
      postalcode: address.postal_code,
      states: address.state,
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-card-details',
  templateUrl: './add-card-details.component.html',
  styleUrls: ['./add-card-details.component.scss'],

})
export class AddCardDetailsComponent implements OnInit {
  public cardDetails: FormGroup;
  hide = true;
  months: any[] = [
    { month: '01' },
    { month: '02' },
    { month: '03' },
    { month: '04' },
    { month: '05' },
    { month: '06' },
    { month: '07' },
    { month: '08' },
    { month: '09' },
    { month: '10' },
    { month: '11' },
    { month: '12' },
];
years: any[] = [
  { year: '2019' },
  { year: '2020' },
  { year: '2021' },
  { year: '2022' },
  { year: '2023' },
  { year: '2024' },
  { year: '2025' },
  { year: '2026' },
  { year: '2027' },
  { year: '2028' },
  { year: '2029' },
  { year: '2030' },
  { year: '2031' },
  { year: '2032' },
  { year: '2033' },
  { year: '2034' },
  { year: '2055' },
  { year: '2066' },
  { year: '2077' },
  { year: '2088' },
  { year: '2099' },
  { year: '2040' },
  { year: '2041' },
  { year: '2042' },
  { year: '2043' },
  { year: '2044' },
  { year: '2045' },
  { year: '2046' },
  { year: '2047' },
  { year: '2048' },
  { year: '2049' },
  { year: '2050' },
];
  constructor() { }

  ngOnInit(): void {
    this.cardDetails = new FormGroup({
  
      card_number: new FormControl('', [Validators.required]),

      card_month: new FormControl('', [Validators.required]),

      card_year: new FormControl('', [Validators.required]),

      card_cvv: new FormControl('', [Validators.required, Validators.minLength(3)]),

      card_name: new FormControl('', [Validators.required]),
    })
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.cardDetails.controls[controlName].hasError(errorName);
    }

  onClickSubmit(cardDetails: any){
    console.log('Card Details', cardDetails)
  }
}

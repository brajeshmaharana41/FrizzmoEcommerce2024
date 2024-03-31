import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false, showError: false}
  }]
})
export class CartItemsComponent implements OnInit {
  index = 2
  firstFormGroups: FormGroup;
  secondFormGroups: FormGroup;
  thirdFormGroups : FormGroup;
  forthFormGroups : FormGroup;

  constructor( private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) { 
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
    .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required]
  });
  forthFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required]
  });
  stepperOrientation: Observable<StepperOrientation>;



  ngOnInit(): void {
    this.firstFormGroups = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroups = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroups = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroups = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

}

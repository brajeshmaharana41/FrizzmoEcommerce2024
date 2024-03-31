import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-filter-popup',
  templateUrl: './item-filter-popup.component.html',
  styleUrls: ['./item-filter-popup.component.scss']
})
export class ItemFilterPopupComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  panelOpenState = false;
  activeState = '';
  seasons: string[] = ['200 Above', '100 to 200', '50 to 100', 'Under 25'];
  brands: string[] = ['Apsara','Classmate','Cross','Parker','Reynolds','Waterman','ZesTale','4Ever'];
  colors: string[] = [ 'Coffee','Grey','Ivory','Pink','Red','Yellow'];

  constructor() { }

  ngOnInit(): void {
  }
  setStateAsActive(state: any) {
    this.activeState = state;
  }
}

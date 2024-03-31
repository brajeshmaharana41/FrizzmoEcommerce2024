import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompletePositionDirective } from './autocomplete-position.directive';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    AutocompletePositionDirective
  ],
  exports:[
    AutocompletePositionDirective
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule
  ]
})
export class MatAutocompleteScrollModule { }

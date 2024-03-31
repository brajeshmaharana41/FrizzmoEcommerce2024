import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Badmanton Recquet', 'Baby toys', 'Bags','Bags for boys', 'Bags for girls', 'Baby cycle'];
  filteredOptions: Observable<string[]>;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Input() i : any;

  constructor(
    public dialog: MatDialog
  ) { 
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  onMenu() {
    this.dialog.open(MobileNavComponent, {
      width: '250px',
      panelClass: 'side-menu'
    });
  }

}

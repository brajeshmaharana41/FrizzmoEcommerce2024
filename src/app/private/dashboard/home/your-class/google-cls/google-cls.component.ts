import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YourClassComponent } from "../your-class.component";
@Component({
  selector: 'app-google-cls',
  templateUrl: './google-cls.component.html',
  styleUrls: ['./google-cls.component.scss']
})
export class GoogleClsComponent implements OnInit {

  selectedClasses: any[] = []
  part1: any[] = []
  part2: any[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    let half = Math.ceil(this.data.courseList.length / 2);
    let courseList1 = JSON.parse(JSON.stringify(this.data.courseList))
    let courseList2 = JSON.parse(JSON.stringify(this.data.courseList))

    this.part1 = courseList1.splice(0, half)
    this.part2 = courseList2.splice(half, courseList2.length)
    this.selectedClasses = data.selectedList

  }

  showClass: boolean = false;

  toggle_nameShow() {

    this.showClass = !this.showClass;

  }
  ngOnInit(): void {
  }

  onSelect(event: any, item: any) {

    if (event.checked) {
      this.selectedClasses.push(item)
    } else {
      let index = this.selectedClasses.findIndex((e: any) => e.id == item.id)
      this.selectedClasses.splice(index, 1)
    }

  }

  isChecked(item: any) {
    let index = this.selectedClasses.findIndex((e: any) => e.id == item.id)
    return index >= 0
  }

}

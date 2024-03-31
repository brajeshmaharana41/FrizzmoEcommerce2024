import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InviteStuComponent } from './invite-stu/invite-stu.component'
import { AddNewClsComponent } from './add-new-cls/add-new-cls.component'
import { AddStuClsComponent } from './add-stu-cls/add-stu-cls.component'
import { GoogleClsComponent } from './google-cls/google-cls.component'
import { ReUpdateClsComponent } from './re-update-cls/re-update-cls.component'
import { RewardClassComponent } from './reward-class/reward-class.component'
import { CalssStudentData } from 'src/app/services/modal.services';
import {Sort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { GApiService } from './g-api-services/g-api.service';

@Component({
  selector: 'app-your-class',
  templateUrl: './your-class.component.html',
  styleUrls: ['./your-class.component.scss'],
})
export class YourClassComponent implements OnInit {

  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  activeState = '';

  searchFilter: string = ''

  courseList: any = []
  studentsList: any = []

  courses: any = []
  dataSources: any = [];

  isLoadingCourses: boolean = false
  isLoadingStudents: boolean = false

  showClasses: boolean = false

  constructor(
    public dialog: MatDialog, 
    private router: Router,
    private gApiService: GApiService,
  ) { }

  sortData(sort: Sort) {
  }

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
  invteDialog() {
    const dialogRef = this.dialog.open(InviteStuComponent, {
      height: '600px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  reupdateDialog() {
    const dialogRef = this.dialog.open(ReUpdateClsComponent , {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addstuDialog() {
    const dialogRef = this.dialog.open(AddStuClsComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addclsDialog() {
    const dialogRef = this.dialog.open(AddNewClsComponent, {
      height: '550px',
      width: '450px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showClasses = true
        this.courses = [result]
      }
    });
  }

  googleclsDialog() {
    const dialogRef = this.dialog.open(GoogleClsComponent, {
      height: '550px',
      width: '450px',  
      data: JSON.parse(JSON.stringify({ courseList: this.courseList, selectedList: this.courses }))
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courses = result
      }
    });
  }
  rewardclsDialog() {
    const dialogRef = this.dialog.open(RewardClassComponent, {
      height: '550px',
      width: '450px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  showClass: boolean = false ;

  toggle_nameShow() {

    this.showClass = ! this.showClass;

  }
  ngOnInit(): void {
  }

  setStateAsActive(state: any) {
    this.activeState = state;
    }

  onNameFilter(letter: string) {
    this.dataSources = this.studentsList.filter((e: any) => new RegExp(`^${letter}`, 'i').test(e.name))
  }

  onSearchFilter() {
    this.dataSources = this.studentsList.filter((e: any) => new RegExp(this.searchFilter, 'i').test(e.name))
  }

  async fetchStudents(course: any) {

    this.isLoadingStudents = true
    this.activeState = course.id;
    this.dataSources = []
    let list: any = await this.gApiService.students(course.id)
    let data: any = []

    if (list.students) {
      for (const iterator of list.students) {
        data.push({ 
          image: `https:${iterator.profile.photoUrl}`, 
          name: iterator.profile.name.fullName,
          classname: course.name,
          price: 'NA',
          gift: 'Not yet gifted',
          giftstatus: '-',
          gifticon: 'delete',
          giftcolor: 'nogiftcolor',
          statuscolor:'pricefont',
          gifticoncolor:'deleticoncolor',
          invite: 'Invite'
        })
      }
    }

    this.studentsList = data
    this.dataSources = data
    this.isLoadingStudents = false

  }

  async onAuthenticate() {
    await this.gApiService.signin()
    this.listCourses()
  }
  
  async listCourses() {
    this.isLoadingCourses = true
    this.courseList = []
    let list = await this.gApiService.list()
    this.isLoadingCourses = false
    this.courseList = list.courses
    this.googleclsDialog()
    this.showClasses = true
  }
}

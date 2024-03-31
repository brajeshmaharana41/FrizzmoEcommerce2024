import { Component, OnInit } from '@angular/core';


export interface   InviteInfo {
  label: string;
  title: string;
  subtitle: string;
  schoolname: string
  btnclor: string;
  btn: string;
}

const inviePending: InviteInfo[] = [
  { label: 'AD', title: 'Andre Doumad', btnclor: 'refer-btn',  subtitle: 'Invited', btn: 'Pending', schoolname:''},
  { label: 'AK', title: 'Andre Korchagin', btnclor: 'refer-btns',  subtitle: 'Invited', btn: 'Invite Again', schoolname:''},
  { label: 'FB', title: 'Frac Brodai', btnclor: 'refer-btns',  subtitle: 'Invited', btn: 'Invite Again', schoolname:''},
];

const inviteConform: InviteInfo[] = [
  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'Liberal Arts and Science Academy High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},

  { label: 'IM', title: 'Ivan Mesherinov', btnclor: '', subtitle: 'Placed 3 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'JG', title: 'Jake Grella', btnclor: '',  subtitle: 'Placed 1 orders this  month', btn: '', schoolname:'University High School'},
  { label: 'KN', title: 'Kalvin North', btnclor: '',  subtitle: 'Placed No orders this month.', btn: '', schoolname:'University High School'},
  { label: 'KW', title: 'Kyle W. Cartmell', btnclor: '',  subtitle: 'Placed 5 orders this  month', btn: '', schoolname:'University High School'},
];
const CurrentData: InviteInfo[] = []
interface sort {
  value: string;
  viewValue: string;
}
export interface SortInvite {
  menuText: string;
}
export interface FilterInvite {
  filterText: string;
}


@Component({
  selector: 'app-invited-teachers',
  templateUrl: './invited-teachers.component.html',
  styleUrls: ['./invited-teachers.component.scss']
})
export class InvitedTeachersComponent implements OnInit {
  index = 1
  techpendings = inviePending;
  pageSize = 8
  lastindex = 0
  techconforms = inviteConform;
  currentData = CurrentData;
  sorts : SortInvite[];
  filters : FilterInvite[];
  selectedfliter: any = 'All'
  selectedsort: any = 'All'
  constructor() { }
  onload(){
    if(this.lastindex < this.techconforms.length){
      let nextIndex = this.lastindex+ this.pageSize
    if(nextIndex > this.techconforms.length){
      nextIndex = this.techconforms.length
    }

    for (let i = this.lastindex; i < nextIndex; i++) {
      this.currentData.push(this.techconforms[i])
      console.log ("Block statement execution no." + i);
    }
    this.lastindex = nextIndex
    }
  }
  ngOnInit(): void {
    this.onload()
    this.sorts = [
      {menuText: 'All'},
      {menuText: 'Invite Again'},
      {menuText: 'Pending'},
    ];
    this.filters = [
      {filterText: 'All'},
      {filterText: 'School A'},
      {filterText: 'School B'},
    ];
}
  clicksortItem(sortItem : SortInvite){
    this.selectedsort = sortItem.menuText;
  }
  clickfliterItem(fliterItem : FilterInvite){
    this.selectedfliter = fliterItem.filterText;
  }
}

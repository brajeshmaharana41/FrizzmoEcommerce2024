import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-data',
  templateUrl: './review-data.component.html',
  styleUrls: ['./review-data.component.scss']
})
export class ReviewDataComponent implements OnInit {
  starRating = 0; 
  starRating1 = 0; 
  starRating2 = 0; 
  starRating3 = 0; 
  starRating4 = 0; 
  starRating5 = 0; 
  starRating6 = 0; 

  constructor() { }

  ngOnInit(): void {
  }

}

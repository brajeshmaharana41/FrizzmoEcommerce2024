import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  starRating = 0; 
  starRating1 = 0; 
  starRating2 = 0; 

  constructor() { }

  ngOnInit(): void {
  }

}

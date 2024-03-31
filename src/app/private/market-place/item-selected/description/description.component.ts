import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
export interface ImgSelect{
  id: number;
  imgUrl: string;
}

const ImgInfo: ImgSelect[] = [
  { id: 1, imgUrl: '../../../../../assets/product-details/Image.jpg'},
  { id: 2, imgUrl: '../../../../../assets/product-details/thum_2.svg'},
  { id: 3, imgUrl: '../../../../../assets/product-details/thum_1.svg'},
  { id: 4, imgUrl: '../../../../../assets/product-details/thum_4.svg'},
];
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  imgDatas = ImgInfo;
  displayedImg = '../../../../../assets/product-details/Image.jpg';
  @Input() selecteds: boolean;
  @Output() selectedChanges = new EventEmitter<boolean>();
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 4,
    loop: true,
    touch: true,
    velocity: 0.2
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }



  
  onShowing(img: any){
    this.displayedImg = img;
  }
  ngOnInit(): void { 
  }
  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
  public toggleSelecteds() {
    this.selecteds = !this.selecteds;
    this.selectedChanges.emit(this.selecteds);
  }
}

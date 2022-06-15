import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.sass'],
})
export class PlatformsComponent implements OnInit {
  constructor() {}
  changeSlide: boolean = false;
  @ViewChild('myCarousel', { static: false }) myCarousel: any;
  ngOnInit(): void {}

  next() {
    this.myCarousel.next();
    this.changeSlide = true;
  }
  previous() {
    this.myCarousel.prev();
    this.changeSlide = false;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.sass'],
})
export class AppsComponent implements OnInit {
  changeSlide: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  change() {
    if (this.changeSlide == true) {
      this.changeSlide = false;
    } else {
      this.changeSlide = true;
    }
  }
}

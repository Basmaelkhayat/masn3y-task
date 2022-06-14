import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  showResponsivenavbar: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  toggleNavigation() {
    if (this.showResponsivenavbar == true) {
      this.showResponsivenavbar = false;
    } else {
      this.showResponsivenavbar = true;
    }
  }
}

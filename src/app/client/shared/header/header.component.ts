import { Component } from '@angular/core';


@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showButton = false;

  constructor() {
    setTimeout(() => {
      this.showButton = true;
    }, 4000);
  }

  scrollTo100vh() {
    window.scrollTo({
      top: window.innerHeight * 0.9050,
      behavior: 'smooth'
    });
  }




}

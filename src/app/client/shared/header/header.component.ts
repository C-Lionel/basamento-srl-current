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
    }, 5500);
  }

  scrollTo100vh() {
    const scrollToValue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scroll-to'));
    window.scrollTo({
      top: window.innerHeight * scrollToValue,
      behavior: 'smooth'
    });
  }




}

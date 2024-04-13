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
    }, 5000);
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showButton = false;
  @ViewChild('videoElement') videoElement!: ElementRef;

  constructor() {
    setTimeout(() => {
      this.showButton = true;
    }, 4000);
  }

  scrollToVideo() {
    const videoHeight = this.videoElement.nativeElement.offsetHeight;
    const remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const offset = 5.5 * remInPixels;
    const scrollToValue = videoHeight - offset;
  
    window.scrollTo({
      top: scrollToValue,
      behavior: 'smooth'
    });
  }

}

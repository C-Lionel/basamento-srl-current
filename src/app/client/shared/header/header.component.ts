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
    window.scrollTo({
      top: videoHeight,
      behavior: 'smooth'
    });
  }

}

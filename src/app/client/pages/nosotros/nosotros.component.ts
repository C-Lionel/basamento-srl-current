import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {

  constructor(
    private router: Router
  ) {}

  restartVideo(videoPlayer: HTMLVideoElement) {
    videoPlayer.currentTime = 0;
  }
  navigateWithDelay(url: string) {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
      setTimeout(() => {
        this.router.navigate([url]);
      }, 300);
    } else {
      this.router.navigate([url]);
    }
  }

}

import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {

  constructor(
    private router: Router
  ) {}

  ngAfterViewInit() {
    Aos.init();
    this.toggleAOS();
  }

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

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.toggleAOS();
  }


  toggleAOS() {
    const videoElement = document.querySelector('video');
    if (window.innerWidth <= 600) {
      videoElement?.removeAttribute('data-aos');
      videoElement?.removeAttribute('data-aos-offset');
      videoElement?.removeAttribute('data-aos-easing');
    } else {
      videoElement?.setAttribute('data-aos', 'fade-left');
      videoElement?.setAttribute('data-aos-offset', '300');
      videoElement?.setAttribute('data-aos-easing', 'ease-in-sine');
    }
    Aos.refresh();
  }

}

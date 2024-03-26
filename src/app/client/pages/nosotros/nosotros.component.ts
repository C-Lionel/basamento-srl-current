import { Component } from '@angular/core';

@Component({
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  restartVideo(videoPlayer: HTMLVideoElement) {
    videoPlayer.currentTime = 0;
  }

}

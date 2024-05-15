import { Component, HostListener } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  images: any[] | undefined;
  showWhatsAppButton: boolean = false;


  constructor(private homeService: HomeService) {}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.innerWidth > 960 && window.scrollY > 360) {
      this.showWhatsAppButton = true;
    } else if (window.innerWidth <= 960) {
      this.showWhatsAppButton = true;
    } else {
      this.showWhatsAppButton = false;
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.setWhatsAppButtonVisibility();
  }

  setWhatsAppButtonVisibility() {
    if (window.innerWidth <= 960) {
      this.showWhatsAppButton = true;
    } else {
      this.showWhatsAppButton = false;
    }
  }

  ngOnInit() {

    this.homeService.getImages().then((images) => {
      this.images = images;
    });

    this.setWhatsAppButtonVisibility();
  }

}

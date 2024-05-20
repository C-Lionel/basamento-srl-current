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
  showFragment = false;


  constructor(private homeService: HomeService) {}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 360) {
      this.showWhatsAppButton = true;
    } else {
      this.showWhatsAppButton = false;
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth(event.target.innerWidth);
  }

  private checkScreenWidth(width: number) {

    if (width <= 600) {
      this.showFragment = true;
    } else {
      this.showFragment = false;
    }
  }

  ngOnInit() {

    this.homeService.getImages().then((images) => {
      this.images = images;
    });

    // this.setWhatsAppButtonVisibility();

    this.checkScreenWidth(window.innerWidth);
  }



}

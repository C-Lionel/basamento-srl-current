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
    if (window.innerWidth > 600 && window.scrollY > 360) {
      this.showWhatsAppButton = true;
    } else if (window.innerWidth <= 600) {
      this.showWhatsAppButton = true;
    } else {
      this.showWhatsAppButton = false;
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.setWhatsAppButtonVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth(event.target.innerWidth);
  }

  setWhatsAppButtonVisibility() {
    if (window.innerWidth <= 600) {
      this.showWhatsAppButton = true;
    } else {
      this.showWhatsAppButton = false;
    }
  }

  private checkScreenWidth(width: number) {
    // Define el rango de resoluciones en las que deseas mostrar el fragmento de código
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

    this.setWhatsAppButtonVisibility();

    this.checkScreenWidth(window.innerWidth);
  }



}

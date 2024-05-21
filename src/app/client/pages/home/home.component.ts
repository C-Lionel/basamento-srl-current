import { Component, HostListener } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  images: any[] | undefined;
  showWhatsAppButton: boolean = false;
  showFragment = false;


  constructor(
    private homeService: HomeService,
    private router: Router
  ) {}


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

  navigateWithDelay(url: string) {
    setTimeout(() => {
      this.router.navigate([url]);
    }, 300);
  }

  ngOnInit() {

    this.homeService.getImages().then((images) => {
      this.images = images;
    });

    this.checkScreenWidth(window.innerWidth);
  }



}

import { Component } from '@angular/core';
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

  scrollEvent = () => {
    if (window.scrollY > 375) {
        this.showWhatsAppButton = true;
    } else {
        this.showWhatsAppButton = false;
    }
}
    ngOnInit() {
        this.homeService.getImages().then((images) => {
            this.images = images;
        });
        window.addEventListener('scroll', this.scrollEvent, true);
    }

    ngOnDestroy() {
      window.removeEventListener('scroll', this.scrollEvent, true);
  }



}

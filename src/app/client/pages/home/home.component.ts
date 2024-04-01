import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  images: any[] | undefined;


  constructor(private homeService: HomeService) {}

    ngOnInit() {
        this.homeService.getImages().then((images) => {
            this.images = images;
        });
    }


}

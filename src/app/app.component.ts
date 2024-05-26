import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouteConfigLoadEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
declare let AOS: any;
import { PrimeNGConfig } from 'primeng/api';
import { LoadingService } from './client/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'basamento-srl-current';


  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    public loadingService: LoadingService
    ) { }

    ngOnInit() {

      // window.addEventListener('load', () => {
      //   this.loadingService.setLoading(false);
      // });

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd || event instanceof RouteConfigLoadEnd)
      ).subscribe(() => {
        this.loadingService.setLoading(true);
        setTimeout(() => {
          AOS.refresh();
          this.loadingService.setLoading(false);
        }, 500);
      });

      this.primengConfig.ripple = true;

      AOS.init({
        once: true
      });

    }

}





import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouteConfigLoadEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
declare let AOS: any;
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'basamento-srl-current';
  private static initialized = false;
  isLoading: boolean = true;

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router
    ) { }

    ngOnInit() {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd || event instanceof RouteConfigLoadEnd)
      ).subscribe(() => {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          AOS.refresh(); // Reinitialize AOS on each navigation
        }, 300); // Show loading for a minimum duration
      });

      this.primengConfig.ripple = true;

      AOS.init({
        once: true
      });
    }

}





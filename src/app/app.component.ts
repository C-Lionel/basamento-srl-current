import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router
    ) { }

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Reinicia la posición de desplazamiento
      }
    });

    this.primengConfig.ripple = true;

    if (!AppComponent.initialized) {
      AppComponent.initialized = true;
      AOS.init({
        once: true
      });
    }

  }

}





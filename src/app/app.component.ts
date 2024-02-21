import { Component, OnInit } from '@angular/core';
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

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    
    if (!AppComponent.initialized) {
      AppComponent.initialized = true;
      AOS.init({
        once: true
      });
    }
  }

}





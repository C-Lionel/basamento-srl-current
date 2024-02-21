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

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    // Animaciones al hacer scroll, lo importamos en el app para que lo cargue bien cuando iniciamos por primera vez la aplicación
    AOS.init({
      once: true
    });
  }

}





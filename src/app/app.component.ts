import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
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
    // ACLARACIÓN: En el package.json agregamos la propiedad sideEffects en false por una cuestión de optimización a la hora de cargar la libreria en la aplicación, si en algún momento llega a causar problemas eliminar dicha propiedad
    AOS.init({
      once: true
    });
  }

}





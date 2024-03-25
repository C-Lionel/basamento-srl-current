import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     window.addEventListener('load', () => {
    //         this.isLoading = false;
    //     });
    //   }
    // });

  let loadTimeout: ReturnType<typeof setTimeout>;

  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      // Mostrar el loading al iniciar la navegación
      this.isLoading = true;

      // Temporizador para mostrar el loading solo si la página no se carga en 3 segundos
      loadTimeout = setTimeout(() => {
        this.isLoading = false;
      },);

      // Verificar si la página se ha cargado completamente
      window.addEventListener('load', () => {
        // Cancelar el temporizador si la página se carga antes del tiempo establecido
        clearTimeout(loadTimeout);
        this.isLoading = false;
      });
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





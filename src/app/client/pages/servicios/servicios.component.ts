import { Component, HostListener, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit  {

  firstLoad = true;

  ngOnInit(): void {
    // const startTime = performance.now();
    if (this.firstLoad) {
      this.firstLoad = false;
      setTimeout(() => {
        AOS.refresh();

      }, 100);
    }
  }

  // IMPLEMENTACION PARA QUE EN MODO RESPONSIVE NO SE ACTIVE EL AOS

  ngAfterViewInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    if (window.innerWidth <= 700) {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach(element => {
        element.removeAttribute('data-aos');
        element.removeAttribute('data-aos-duration');
      });
    } else {
      // Vuelve a aplicar AOS si la pantalla es mayor a 700px
      AOS.refresh();
    }
  }
}

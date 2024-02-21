import { Component, OnInit } from '@angular/core';
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
        // const endTime = performance.now();
        // console.log(`Tiempo de carga del componente: ${endTime - startTime} milisegundos`);
      }, 100);
    }
  }
}

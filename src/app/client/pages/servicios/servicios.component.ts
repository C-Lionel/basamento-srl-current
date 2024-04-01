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

      }, 100);
    }
  }
}

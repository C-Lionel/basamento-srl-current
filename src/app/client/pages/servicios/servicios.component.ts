import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  ngOnInit() {
    AOS.init({
      once: true
    });
  }

}

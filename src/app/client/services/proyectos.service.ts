import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Servicio } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private selectedProjectSource = new BehaviorSubject<string | null>(null);
  selectedProject$ = this.selectedProjectSource.asObservable();

  setSelectedProject(project: string | null) {
    this.selectedProjectSource.next(project);
  }

  getServicios(): Promise<Servicio[]> {
    const servicios: Servicio[] = [
      {
        ruta: 'junin-2816',
        nombre: 'Junin 2816',
        descripcion: 'Ejecución depósito comercial de 130 m² cubiertos.',
        imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-1.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-2.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-3.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-4.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-5.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-6.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
        ],
      },
      {
        ruta: 'alvear-1065',
        nombre: 'Alvear 1065',
        descripcion: 'Remodelación Alvear 1065',
        imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-1.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-2.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-3.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-4.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-5.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-6.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
        ],
      },
      // Agregar más servicios según sea necesario
    ];
    console.log('Servicios obtenidos:', servicios);
    return Promise.resolve(servicios);
  }


}

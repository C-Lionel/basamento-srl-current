import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private alt_description = 'Venado Tuerto - Provincia de Santa Fe';
  private selectedProjectSource = new BehaviorSubject<string | null>(null);
  selectedProject$ = this.selectedProjectSource.asObservable();

  setSelectedProject(project: string | null) {
    this.selectedProjectSource.next(project);
  }

  getProyectos(): Promise<Proyecto[]> {
    const proyectos: Proyecto[] = [

      {
        ruta: 'alvear-1065',
        nombre: 'ALVEAR 1065',
        descripcion: {
          opciones: {
            option1: 'Remodelación de vivienda',
            option2: 'Construcción de nuevo baño y lavadero',
            option3: 'Reparación de cañerias de gas y presentación en litoral gas',
            option4: 'Mantenimiento y nuevas cañerias de agua y cloacas',
            option5: 'Arreglos y nuevas instalaciones eléctricas',
          },
        },
        imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-1.jpg', alt: this.alt_description, title: 'Alvear 1065' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-2.jpg', alt: this.alt_description, title: 'Alvear 1065' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-3.jpg', alt: this.alt_description, title: 'Alvear 1065' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-4.jpg', alt: this.alt_description, title: 'Alvear 1065' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-5.jpg', alt: this.alt_description, title: 'Alvear 1065' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-6.jpg', alt: this.alt_description, title: 'Alvear 1065' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-7.jpg', alt: this.alt_description, title: 'Alvear 1065' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-8.jpg', alt: this.alt_description, title: 'Alvear 1065' },
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-8.jpg', alt: this.alt_description, title: 'Alvear 1065' },
        ],
      },
      {
        ruta: 'junin-2816',
        nombre: 'JUNIN 2816',
        descripcion: {
          opciones: {
            option1: 'Ejecución depósito comercial de 130 m² cubiertos'

          },
        },
        imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-1.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-2.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-3.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-4.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-5.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-6.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-7.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-8.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-9.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-10.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-11.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-12.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-13.jpg', alt: this.alt_description, title: 'Junin 2816' },
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-14.jpg', alt: this.alt_description, title: 'Junin 2816' },
        ],
      },
      {
        ruta: 'santafe-2189',
        nombre: 'SANTA FE 2189',
        descripcion: {
          opciones: {
            option1: 'Ejecución local comercial'

          },
        },
        imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-1.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-2.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-3.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-4.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          // { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-5.jpg', alt: 'Venado Tuerto - Santa Fe', title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-6.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-7.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-8.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-9.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-10.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-11.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-12.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-13.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-14.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },
          { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-15.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-15.jpg', alt: this.alt_description, title: 'Santa Fe 2189' },

        ],
      },
      // Agregar más servicios según sea necesario
    ];
    // console.log('Servicios obtenidos:', servicios);
    return Promise.resolve(proyectos);
  }


}

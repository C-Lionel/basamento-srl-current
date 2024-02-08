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



  private proyectos: any[] = [
    {
      nombre: 'Alvear 1065',
      ruta: 'alvear-1065',
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
         { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-6.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-7.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-8.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-8.jpg'},
      ],
    },
    {
      nombre: 'Junin 2816',
      ruta: 'junin-2816',
      descripcion: {
        opciones: {
          option1: 'Ejecución depósito comercial de 130 m² cubiertos',
        },
      },
      imagenes: [
        { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-6.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-7.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-8.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-9.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-10.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-11.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-12.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-13.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-14.jpg'},
      ],
    },
    {
      nombre: 'Santa Fe 2189',
      ruta: 'santafe-2189',
      descripcion: {
        opciones: {
          option1: 'Ejecución depósito comercial de 130 m² cubiertos',
        },
      },
      imagenes: [
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-1.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-2.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-3.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-4.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-6.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-7.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-8.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-9.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-10.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-11.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-12.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-13.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-14.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/galeria/img-15.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/santa-fe-2189/small/img-15.jpg'},
      ],
    },

  ];

  capitalizeFirstLetter(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  }

  setSelectedProject(project: string | null) {
    this.selectedProjectSource.next(project);
  }

  getProyectos(): Promise<Proyecto[]> {
    const proyectosConImagenes: Proyecto[] = this.proyectos.map((proyecto: any) => {
      return {
        ruta: proyecto.ruta,
        nombre: proyecto.nombre,
        descripcion: proyecto.descripcion,
        imagenes: proyecto.imagenes.map((imagen: any) => {
          return {
          itemImageSrc: imagen.itemImageSrc, // Accede directamente a la propiedad itemImageSrc
          thumbnailImageSrc: imagen.thumbnailImageSrc, // Accede directamente a la propiedad thumbnailImageSrc
          alt: this.alt_description,
          title: this.capitalizeFirstLetter(proyecto.nombre)
          };
        }),
      };
    });

    return Promise.resolve(proyectosConImagenes);
  }
}



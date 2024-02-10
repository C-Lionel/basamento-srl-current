import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {

  private alt_description = 'Venado Tuerto - Provincia de Santa Fe';
  private alt_description_2 = 'Arias - Provincia de Córdoba';
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
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-9.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-10.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-11.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-12.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-13.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/alvear-1065/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/alvear-1065/small/img-14.jpg'},
      ],
    },
    {
      nombre: 'Cementerio Privado Otoñal',
      ruta: 'cementerio-otoñal',
      descripcion: {
        opciones: {
          option1: 'Restauración interior y exterior de capilla, sala velatoria y oficina',
          option2: 'Ejecución de Nichos',
        },
      },
      imagenes: [
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-1.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-2.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-3.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-4.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-5.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-6.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-7.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-8.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-9.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-10.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-11.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-12.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-13.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-14.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-15.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-15.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-16.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-16.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-17.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-17.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-18.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-18.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-19.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-19.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-20.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-20.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-21.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-21.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-22.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-22.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-23.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-23.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-24.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-24.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-25.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-25.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/galeria/img-26.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/cementerio-otoñal/small/img-26.jpg'},
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
      nombre: 'Los Molles',
      ruta: 'los-molles',
      descripcion: {
        opciones: {
          option1: 'Los Molles - Arias',
        },
      },
      imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-6.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-7.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-8.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-9.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-10.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/los-molles/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/los-molles/small/img-11.jpg'},
      ],
    },
    {
      nombre: 'Santa Fe 2189',
      ruta: 'santafe-2189',
      descripcion: {
        opciones: {
          option1: 'Ejecución local comercial para venta de vehículos',
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

  capitalizeLetter(str: string): string {
    return str.toUpperCase()
  }
  // capitalizeFirstLetter(str: string): string {
  //   return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  // }

  setSelectedProject(project: string | null) {
    this.selectedProjectSource.next(project);
  }

  getProyectos(): Promise<Proyecto[]> {
    const proyectosConImagenes: Proyecto[] = this.proyectos.map((proyecto: any) => {

      let altDescription = this.alt_description;

      if (proyecto.nombre === 'Los Molles') {
        altDescription = this.alt_description_2;
      }

      return {
        ruta: proyecto.ruta,
        nombre: this.capitalizeLetter(proyecto.nombre) ,
        descripcion: proyecto.descripcion,
        imagenes: proyecto.imagenes.map((imagen: any) => {
          return {
          itemImageSrc: imagen.itemImageSrc, // Accede directamente a la propiedad itemImageSrc
          thumbnailImageSrc: imagen.thumbnailImageSrc, // Accede directamente a la propiedad thumbnailImageSrc
          alt: altDescription,
          title: proyecto.nombre
          };
        }),
      };
    });

    return Promise.resolve(proyectosConImagenes);
  }
}



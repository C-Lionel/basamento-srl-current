
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private selectedProjectSource = new BehaviorSubject<string | null>(null);
  selectedProject$ = this.selectedProjectSource.asObservable();

  setSelectedProject(project: string | null) {
    this.selectedProjectSource.next(project);
  }

  getImages(): Promise<any[]> {
    const images = [
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-1.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-2.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-3.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-4.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-5.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-6.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-7.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-8.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-9.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-10.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-11.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-12.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-13.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },
      { itemImageSrc: 'assets/imagenes/proyectos/junin-2816/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/junin-2816/small/img-14.jpg', alt: 'Venado Tuerto - Provincia de Santa Fe', title: 'Depósito calle Junin 2816' },




      // Agrega más rutas según sea necesario
    ];
    return Promise.resolve(images);
  }


}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {

  private alt_description = 'Venado Tuerto - Provincia de Santa Fe';
  private alt_description_2 = 'Arias - Provincia de Córdoba';
  private alt_description_3 = ' Virrey del Pino - Provincia de Buenos Aires';
  private selectedProjectSource = new BehaviorSubject<string | null>(null);
  selectedProject$ = this.selectedProjectSource.asObservable();



  private proyectos: any[] = [

    {
      nombre: 'Estación de Servicio Axion - Roma',
      ruta: 'axion-roma',
      descripcion: {
        opciones: {
          option1: 'Estación de servicio AXION',
        },
      },
      imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-6.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-7.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-8.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-9.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-10.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-11.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-12.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-13.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-14.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-15.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-15.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-16.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-16.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-17.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-17.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-18.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-18.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-19.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-19.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-20.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-20.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-21.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-21.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-22.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-22.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-23.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-23.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-24.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-24.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-25.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-25.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-26.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-26.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-27.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-27.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-28.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-28.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-29.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-29.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-30.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-30.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-31.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-31.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-32.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-32.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-33.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-33.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-34.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-34.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-35.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-35.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-36.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-36.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-37.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-37.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-38.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-38.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-39.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-39.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-40.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-40.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-41.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-41.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-42.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-42.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-43.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-43.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-44.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-44.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-45.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-45.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/axion-roma/galeria/img-46.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/axion-roma/small/img-46.jpg'},
      ],
    },
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
      nombre: 'Perillo 1125',
      ruta: 'perillo-1125',
      descripcion: {
        opciones: {
          option1: 'Ejecución vivienda familiar',
        },
      },
      imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/perillo-1125/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/perillo-1125/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/perillo-1125/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/perillo-1125/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/perillo-1125/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/perillo-1125/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/perillo-1125/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/perillo-1125/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/perillo-1125/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/perillo-1125/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/perillo-1125/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/perillo-1125/small/img-6.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/perillo-1125/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/perillo-1125/small/img-7.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/perillo-1125/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/perillo-1125/small/img-8.jpg'},
      ],
    },
    {
      nombre: 'Sarmiento 249',
      ruta: 'sarmiento-249',
      descripcion: {
        opciones: {
          option1: 'Sarmiento 249',
        },
      },
      imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-6.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-7.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-8.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-9.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-10.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-11.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/sarmiento-249/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/sarmiento-249/small/img-12.jpg'},
      ],
    },
    {
      nombre: 'Barzola Grúas',
      ruta: 'barzola-gruas',
      descripcion: {
        opciones: {
          option1: 'Sarmiento 249',
        },
      },
      imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/barzola-gruas/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/barzola-gruas/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/barzola-gruas/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/barzola-gruas/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/barzola-gruas/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/barzola-gruas/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/barzola-gruas/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/barzola-gruas/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/barzola-gruas/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/barzola-gruas/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/barzola-gruas/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/barzola-gruas/small/img-6.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/barzola-gruas/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/barzola-gruas/small/img-7.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/barzola-gruas/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/barzola-gruas/small/img-8.jpg'},
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
      nombre: 'Jockey Club',
      ruta: 'jockey-club',
      descripcion: {
        opciones: {
          option1: 'Jockey Club',
        },
      },
      imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/jockey-club/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/jockey-club/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/jockey-club/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/jockey-club/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/jockey-club/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/jockey-club/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/jockey-club/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/jockey-club/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/jockey-club/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/jockey-club/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/jockey-club/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/jockey-club/small/img-6.jpg'},
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
    {
      nombre: 'Supermercado Alem',
      ruta: 'super-alem',
      descripcion: {
        opciones: {
          option1: 'Ejecución futuro supermercado Alem',
        },
      },
      imagenes: [
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-1.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-2.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-3.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-4.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-5.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-6.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-7.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-8.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-9.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-10.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-11.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-12.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-13.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-14.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-15.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-15.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-16.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-16.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-17.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-17.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-18.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-18.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-19.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-19.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-20.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-20.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-21.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-21.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-22.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-22.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-23.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-23.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-24.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-24.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/super-alem/galeria/img-25.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/super-alem/small/img-25.jpg'},
      ],
    },
    {
      nombre: 'Escuela de los Padres',
      ruta: 'escuela-los-padres',
      descripcion: {
        opciones: {
          option1: 'Pintura interior y exterior',
        },
      },
      imagenes: [
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-1.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-2.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-3.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-4.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-5.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-6.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-7.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-7.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-8.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-8.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-9.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-9.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-10.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-10.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-11.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-11.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-12.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-12.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-13.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-13.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-14.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-14.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-15.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-15.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-16.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-16.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-17.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-17.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-18.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-18.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-19.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-19.jpg'},
        { itemImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/galeria/img-20.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/escuela-los-padres/small/img-20.jpg'},
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
      nombre: 'Orsa',
      ruta: 'orsa',
      descripcion: {
        opciones: {
          option1: 'Ejecución playa de maniobra y estacionamiento camiones en planta Royal Canin',
          option2: 'Ejecución tendido pluvial a Arroyo en exterior planta Royal Canin',
          option3: 'Ejecución cámaras y desagües internos en planta Royal Canin',
        },
      },
      imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/orsa/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/orsa/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/orsa/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/orsa/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/orsa/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/orsa/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/orsa/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/orsa/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/orsa/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/orsa/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/orsa/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/orsa/small/img-6.jpg'},

      ],
    },
    {
      nombre: 'Polo Club',
      ruta: 'polo-club',
      descripcion: {
        opciones: {
          option1: 'Ejecución de cordón cuneta, alcantarillas y pavimento'
        },
      },
      imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/polo/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/polo/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/polo/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/polo/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/polo/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/polo/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/polo/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/polo/small/img-4.jpg'},


      ],
    },
    {
      nombre: 'Roma Parador',
      ruta: 'roma-parador',
      descripcion: {
        opciones: {
          option1: 'Roma Parador'
        },
      },
      imagenes: [
          { itemImageSrc: 'assets/imagenes/proyectos/roma-parador/galeria/img-1.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/roma-parador/small/img-1.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/roma-parador/galeria/img-2.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/roma-parador/small/img-2.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/roma-parador/galeria/img-3.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/roma-parador/small/img-3.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/roma-parador/galeria/img-4.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/roma-parador/small/img-4.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/roma-parador/galeria/img-5.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/roma-parador/small/img-5.jpg'},
          { itemImageSrc: 'assets/imagenes/proyectos/roma-parador/galeria/img-6.jpg', thumbnailImageSrc: 'assets/imagenes/proyectos/roma-parador/small/img-6.jpg'},


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

      if (proyecto.nombre === 'Orsa') {
        altDescription = this.alt_description_3;
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



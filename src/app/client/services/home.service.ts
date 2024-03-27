
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  getImages(): Promise<any[]> {

    return Promise.resolve([

      { itemImageSrc: 'assets/imagenes/home/galleria/img-1.jpg'},
      { itemImageSrc: 'assets/imagenes/home/galleria/img-2.jpg'},
      { itemImageSrc: 'assets/imagenes/home/galleria/img-3.jpg'},
      { itemImageSrc: 'assets/imagenes/home/galleria/img-4.jpg'},
      { itemImageSrc: 'assets/imagenes/home/galleria/img-5.jpg'},
      { itemImageSrc: 'assets/imagenes/home/galleria/img-6.jpg'},
      { itemImageSrc: 'assets/imagenes/home/galleria/img-7.jpg'},
      { itemImageSrc: 'assets/imagenes/home/galleria/img-8.jpg'},
      { itemImageSrc: 'assets/imagenes/home/galleria/img-9.jpg'},
    ]);
  }
}



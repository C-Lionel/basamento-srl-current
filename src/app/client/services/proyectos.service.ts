
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
      { itemImageSrc: 'assets/img1.jpg', thumbnailImageSrc: 'assets/thumb1.jpg', alt: 'lio', title: 'lio' },
      { itemImageSrc: 'assets/img2.jpg', thumbnailImageSrc: 'assets/thumb2.jpg', alt: 'lio', title: 'lio' },
      { itemImageSrc: 'assets/img3.jpg', thumbnailImageSrc: 'assets/thumb3.jpg', alt: 'lio', title: 'lio' },
      { itemImageSrc: 'assets/img4.jpg', thumbnailImageSrc: 'assets/thumb4.jpg', alt: 'lio', title: 'lio' },
      { itemImageSrc: 'assets/img5.jpg', thumbnailImageSrc: 'assets/thumb5.jpg', alt: 'lio', title: 'lio' },
      { itemImageSrc: 'assets/img6.jpg', thumbnailImageSrc: 'assets/thumb6.jpg', alt: 'lio', title: 'lio' },
      // Agrega más rutas según sea necesario
    ];
    return Promise.resolve(images);
  }


}

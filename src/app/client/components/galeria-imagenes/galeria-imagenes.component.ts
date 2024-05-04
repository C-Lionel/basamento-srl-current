import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-imagenes',
  templateUrl: './galeria-imagenes.component.html',
  styleUrls: ['./galeria-imagenes.component.scss']
})
export class GaleriaImagenesComponent implements OnDestroy, OnInit {

  @Input() indexProject!: number;

  @Input() imagenes: any[] = [];

  @Input() showThumbnails: boolean = false;

  @Input() activeIndex: number = 0;

  fullscreen: boolean = false;

  onFullScreenListener: any;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  imagesLoaded: boolean[] = [];

  ngOnInit(): void {
    this.bindDocumentListeners();
  }

    // Método para cargar una imagen de tamaño completo
    loadFullSizeImage(index: number) {
      const image = this.imagenes[index];
      if (!this.imagesLoaded[index] && image.fullSizeImageSrc) {
        const img = new Image();
        img.onload = () => {
          // Una vez que la imagen está cargada, actualiza la fuente de la imagen en la matriz
          this.imagenes[index].itemImageSrc = image.fullSizeImageSrc;
          this.imagesLoaded[index] = true;
        };
        img.src = image.fullSizeImageSrc;
      }
    }

    // Método para detectar cuando una imagen está en la vista y cargarla
    onImageInView(index: number) {
      if (!this.imagesLoaded[index]) {
        this.loadFullSizeImage(index);
      }
    }

    // Método para limpiar las imágenes que ya no están en la vista
    onImageOutOfView(index: number) {
      // Puedes limpiar la imagen de tamaño completo si lo deseas
      this.imagenes[index].itemImageSrc = this.imagenes[index].thumbnailImageSrc;
    }

  onThumbnailButtonClick() {
    this.showThumbnails = !this.showThumbnails;
  }


  toggleFullScreen() {
    console.log(this.indexProject);
    if (this.fullscreen) {
        this.closePreviewFullScreen();
    } else {
        this.openPreviewFullScreen();
    }
}

  openPreviewFullScreen() {
    console.log('Abriendo pantalla completa...');
    let elem = document.querySelector('.imgs-' + this.indexProject) as any;
    if (elem) {
      try {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      } catch (error) {
        console.error('Error al intentar activar el modo de pantalla completa:', error);
      }
    }
  }

  onFullScreenChange() {
    console.log('Cambio en el estado de pantalla completa');
    this.fullscreen = !!(
      document.fullscreenElement ||
      (document as any).mozFullScreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).msFullscreenElement
    );
  }

  closePreviewFullScreen() {
    console.log('Cerrando pantalla completa...');
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
  }
  bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    document.addEventListener('fullscreenchange', this.onFullScreenListener);
    document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
    document.addEventListener('msfullscreenchange', this.onFullScreenListener);
  }


  unbindDocumentListeners() {
    document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
    this.onFullScreenListener = null;
  }


  ngOnDestroy() {
    this.unbindDocumentListeners();
  }

  galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }

  fullScreenIcon() {
    return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
  }
}

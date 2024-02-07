import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { ProyectosService } from '../../services/proyectos.service';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from '../../models/proyecto.model';

@Component({
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit, OnDestroy {



  constructor(
    private proyectosService: ProyectosService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  selectedProject: string | null = null;
  proyectos: Proyecto[] | undefined;
  showThumbnails: boolean = false;
  fullscreen: boolean = false;
  activeIndex: number = 0;
  onFullScreenListener: any;
  proyectosClass: string = 'proyectos';

  @ViewChild('galleria') galleria: Galleria | undefined;

  responsiveOptions: any[] = [
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

  ngOnInit() {

    this.route.url.subscribe(segments => {
      // Verificar si estamos en la página de proyectos

      const isProyectosPage = segments.length === 0 || segments.some(segment => segment.path === 'proyectos');

      if (!isProyectosPage) {
        this.proyectosClass = 'proyectos__individual';
      } else {
        this.proyectosClass = 'proyectos__list';
      }

      // console.log('Is Proyectos Page:', isProyectosPage);
      // console.log('Proyectos Class:', this.proyectosClass);
    });


    this.route.paramMap.subscribe(async (params) => {

      this.selectedProject = params.get('project');
      // console.log('Selected Project: proyectos.component.ts', this.selectedProject);

      this.proyectosService.setSelectedProject(this.selectedProject);

      if (this.selectedProject) {
        // Si hay un proyecto seleccionado, encuentra el servicio que coincida con el nombre del proyecto
        const proyectos = await this.proyectosService.getProyectos();
        this.proyectos = proyectos.filter(proyecto => proyecto.ruta.toLowerCase() === this.selectedProject?.toLowerCase());
        this.activeIndex = 0;
      } else {
        // Si no hay un proyecto seleccionado, obtén todos los servicios
        this.proyectos = await this.proyectosService.getProyectos();
      }

       // Verificar y ajustar el índice activo
       if (this.proyectos && this.proyectos.length > 0 && this.proyectos[0].imagenes && this.proyectos[0].imagenes.length > 0) {
        if (this.activeIndex >= this.proyectos[0].imagenes.length) {
          this.activeIndex = this.proyectos[0].imagenes.length - 1;
        }
      }

      this.bindDocumentListeners();
    });
  }



  getDescripcionOpciones(opciones: { [key: string]: string }): string[] {
    return Object.values(opciones);
  }

  onThumbnailButtonClick() {
    this.showThumbnails = !this.showThumbnails;
  }

  toggleFullScreen() {
    if (this.fullscreen) {
      this.closePreviewFullScreen();
    } else {
      this.openPreviewFullScreen();
    }

    this.cd.detach();
  }

  openPreviewFullScreen() {
    let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem['mozRequestFullScreen']) {
      /* Firefox */
      elem['mozRequestFullScreen']();
    } else if (elem['webkitRequestFullscreen']) {
      /* Chrome, Safari & Opera */
      elem['webkitRequestFullscreen']();
    } else if (elem['msRequestFullscreen']) {
      /* IE/Edge */
      elem['msRequestFullscreen']();
    }
  }

  onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
    this.cd.detectChanges();
    this.cd.reattach();
  }


  closePreviewFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      /* Firefox */
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      /* Chrome, Safari & Opera */
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      /* IE/Edge */
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



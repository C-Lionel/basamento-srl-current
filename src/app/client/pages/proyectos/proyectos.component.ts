
import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../../models/proyecto.model';

@Component({
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  constructor(
    private proyectosService: ProyectosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  selectedProject: string | null = null;
  proyectos: Proyecto[] | undefined;
  proyectosClass: string = 'proyectos';
  showThumbnails: boolean = false;
  showScrollTop: boolean = false;

  ngOnInit() {
    this.route.url.subscribe(segments => {
      const isProyectosPage = segments.length === 0 || segments.some(segment => segment.path === 'proyectos');
      if (!isProyectosPage) {
        this.proyectosClass = 'proyectos__individual';
        this.showScrollTop = false;
      } else {
        this.proyectosClass = 'proyectos__list';
        this.showScrollTop = true;
      }
    });

    this.route.paramMap.subscribe(async (params) => {
      this.selectedProject = params.get('proyecto');  // Obtener el nombre del proyecto de los parámetros de la URL
      this.proyectosService.setSelectedProject(this.selectedProject);  // Establecer el proyecto seleccionado en el servicio

      // Llamar al método getProyecto del servicio si hay un nombre de proyecto válido
      if (this.selectedProject) {
        const proyecto = await this.proyectosService.getProyecto(this.selectedProject);
        this.proyectos = proyecto ? [proyecto] : [];
      }

      // Lógica para obtener proyectos según la categoría si no se proporciona un nombre de proyecto válido
      else {
        const categoria = this.route.snapshot.firstChild?.data['categoria'];
        if (categoria) {
          const proyectos = await this.proyectosService.getProyectosCompletosPorCategoria(categoria);
          this.proyectos = proyectos;
        } else {
          this.proyectos = await this.proyectosService.getProyectos();
        }
      }
    });

  }

  toggleFullScreen() {
    this.showThumbnails = !this.showThumbnails;
  }

  getDescripcionOpciones(opciones: { [key: string]: string }): string[] {
    return Object.values(opciones);
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
}

}

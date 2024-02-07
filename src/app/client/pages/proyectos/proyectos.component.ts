import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from '../../models/proyecto.model';

@Component({
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  constructor(
    private proyectosService: ProyectosService,
    private route: ActivatedRoute,
  ) {}

  selectedProject: string | null = null;
  proyectos: Proyecto[] | undefined;
  proyectosClass: string = 'proyectos';
  showThumbnails: boolean = false;

  ngOnInit() {
    this.route.url.subscribe(segments => {
      const isProyectosPage = segments.length === 0 || segments.some(segment => segment.path === 'proyectos');
      if (!isProyectosPage) {
        this.proyectosClass = 'proyectos__individual';
      } else {
        this.proyectosClass = 'proyectos__list';
      }
    });

    this.route.paramMap.subscribe(async (params) => {
      this.selectedProject = params.get('project');
      this.proyectosService.setSelectedProject(this.selectedProject);

      if (this.selectedProject) {
        const proyectos = await this.proyectosService.getProyectos();
        this.proyectos = proyectos.filter(proyecto => proyecto.ruta.toLowerCase() === this.selectedProject?.toLowerCase());
      } else {
        this.proyectos = await this.proyectosService.getProyectos();
      }
    });
  }

  toggleFullScreen() {
    this.showThumbnails = !this.showThumbnails;
  }

  getDescripcionOpciones(opciones: { [key: string]: string }): string[] {
    return Object.values(opciones);
  }

}

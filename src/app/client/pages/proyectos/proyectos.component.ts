import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  selectedProject: string | null = null;

  constructor(
    private proyectosService: ProyectosService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    // Obtén el valor del parámetro 'project' de la URL
    this.route.paramMap.subscribe((params) => {
      this.selectedProject = params.get('project');
      console.log('Selected Project: proyectos.component.ts', this.selectedProject);
      // Actualiza el servicio compartido con el proyecto seleccionado
      this.proyectosService.setSelectedProject(this.selectedProject);
    });
  }

}

// import { Component, OnInit } from '@angular/core';
// import { ProyectosService } from '../../services/proyectos.service';

// @Component({
//   templateUrl: './proyectos.component.html',
//   styleUrls: ['./proyectos.component.scss']
// })
// export class ProyectosComponent implements OnInit {
//   selectedProject: string | null = null;

//   constructor(private proyectosService: ProyectosService) {}

//   ngOnInit() {
//     this.proyectosService.selectedProject$.subscribe((project) => {
//       console.log('Selected Project: proyectos.component.ts', project);
//       this.selectedProject = project;
//     });
//   }
// }


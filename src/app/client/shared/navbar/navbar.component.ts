import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

   items: MenuItem[] | undefined;

   constructor( private proyectosService: ProyectosService ) {}

   private selectProject(project: string) {
    this.proyectosService.setSelectedProject(project);
  }

    ngOnInit() {
        this.items = [

            {
                label: 'Quiénes Somos',
                icon: 'pi pi-desktop',
                routerLink: 'nosotros'
            },
            {
                label: 'Proyectos',
                icon: 'pi pi-desktop',
                items: [
                  {
                    label: 'S.Ager',
                    icon: 'pi pi-desktop',
                    // command: () => this.selectProject('s-ager'),
                    routerLink: 'proyectos/s-ager'
                  },
                  {
                    label: 'Axion',
                    icon: 'pi pi-desktop',
                    routerLink: 'proyectos/axion'
                  },
                  {
                    label: 'Corralón Velez',
                    icon: 'pi pi-desktop',
                    routerLink: 'proyectos/corralon-velez'
                  },
                ]
            },
            {
                label: 'Servicios',
                icon: 'pi pi-desktop',
                routerLink: 'servicios'
            },
            {
                label: 'Contacto',
                icon: 'pi pi-desktop',
                routerLink: 'contacto'
            },
        ];
    }



}

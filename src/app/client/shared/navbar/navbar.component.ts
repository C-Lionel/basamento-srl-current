import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

   items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [

            {
                label: 'NOSOTROS',
                icon: 'pi pi-desktop',
                routerLink: 'nosotros'
            },
            {
                label: 'PROYECTOS',
                icon: 'pi pi-desktop',
                routerLink: 'proyectos'
            },
            {
                label: 'SERVICIOS',
                icon: 'pi pi-desktop',
                routerLink: 'servicios'
            },
            {
                label: 'CONTACTO',
                icon: 'pi pi-desktop',
                routerLink: 'contacto'
            },
        ];
    }

}

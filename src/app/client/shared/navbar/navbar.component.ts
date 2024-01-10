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
                label: 'Quiénes Somos',
                icon: 'pi pi-desktop',
                routerLink: 'nosotros'
            },
            {
                label: 'Proyectos',
                icon: 'pi pi-desktop',
                items: [
                  {
                    label: 'S.AGER',
                    icon: 'pi pi-desktop',
                    routerLink: 'proyectos/s-ager'
                  },
                  {
                    label: 'AXION',
                    icon: 'pi pi-desktop'
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

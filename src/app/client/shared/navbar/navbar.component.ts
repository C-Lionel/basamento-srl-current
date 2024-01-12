import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  items: MenuItem[] | undefined;
  searchTerm: string = '';
  searchTermError: boolean = false;
  searchTermFound: boolean = false;


  constructor(
    private router: Router,
    // private proyectosService: ProyectosService
    ) {}

 //TODO: NO SE USÓ AL FINAL EL SERVICIO EN ESTE COMPONENTE!!
  //  private selectProject(project: string) {
  //   this.proyectosService.setSelectedProject(project);
  // }


  search() {
    const rutaEncontrada = this.encontrarRutaPorCoincidenciaParcial(this.searchTerm);

    if (rutaEncontrada) {
      this.router.navigate([rutaEncontrada]);
      this.searchTermError = false;
      this.searchTermFound = true;
      this.searchTerm = '';
    } else {
      this.searchTermError = true;
      this.searchTermFound = false;
      console.log(`No se encontró ninguna ruta para: ${this.searchTerm}`);
    }
  }

  handleKeyUp() {
    if (!this.searchTerm) {
      this.searchTermError = false;
      this.searchTermFound = false;
    }
  }

  private encontrarRutaPorCoincidenciaParcial(termino: string): string | null {
    // Limpia el término de búsqueda: quita espacios y convierte a minúsculas
    const terminoLimpiado = termino.trim().toLowerCase();

    // Itera sobre las rutas y devuelve la primera que coincide parcialmente con alguna palabra del término de búsqueda limpiado
    const rutas = [
      '/',
      '/nosotros',
      '/proyectos',
      '/proyectos/s-ager',
      '/proyectos/axion',
      '/proyectos/corralon-velez',
      '/servicios',
      '/contacto'
      // ... (otras rutas)
    ];

    for (const ruta of rutas) {
      // Limpia la ruta y convierte a minúsculas para comparar de manera consistente
      const rutaLimpiada = ruta.trim().toLowerCase();

      // Divide el término de búsqueda en palabras y verifica si alguna coincide parcialmente con la ruta
      const palabrasDelTermino = terminoLimpiado.split(' ');
      if (palabrasDelTermino.some(palabra => rutaLimpiada.includes(palabra))) {
        return ruta;
      }
    }

    return null; // Retorna null si no se encuentra ninguna coincidencia parcial
  }




    ngOnInit() {
        this.items = [

            {
                label: 'Nosotros',
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

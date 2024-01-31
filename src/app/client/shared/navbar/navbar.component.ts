import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

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
    ) {}

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
    } else {
      const rutaEncontrada = this.encontrarRutaPorCoincidenciaParcial(this.searchTerm);
      if (rutaEncontrada) {
        this.searchTermError = false;
        this.searchTermFound = true;
      } else {
        this.searchTermError = true;
        this.searchTermFound = false;
      }
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
      '/proyectos/junin-2816',
      '/proyectos/axion',
      '/proyectos/alvear-1065',
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
                icon: 'pi pi-users',
                routerLink: 'nosotros'
            },
            {
                label: 'Proyectos',
                icon: 'pi pi-wallet',
                items: [
                  {
                    label: 'Depósito Comercial',
                    icon: 'pi pi-minus',
                    // command: () => this.selectProject('s-ager'),
                    routerLink: 'proyectos/junin-2816'
                  },
                  {
                    label: 'Axion',
                    icon: 'pi pi-minus',
                    routerLink: 'proyectos/axion'
                  },
                  {
                    label: 'Corralón Velez',
                    icon: 'pi pi-minus',
                    routerLink: 'proyectos/alvear-1065'
                  },
                ]
            },
            {
                label: 'Servicios',
                icon: 'pi pi-shopping-bag',
                routerLink: 'servicios'
            },
            {
                label: 'Contacto',
                icon: 'pi pi-phone',
                routerLink: 'contacto'
            },
        ];
    }
}

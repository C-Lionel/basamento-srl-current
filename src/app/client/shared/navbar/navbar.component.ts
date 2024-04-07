import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import * as navbarConfig from '../../models/config/navbar-config.json';

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
  isHome: boolean = false;
  currentRouteClass = '';
  isScrolled = false;


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.items = (navbarConfig as any).default.items;

    if (this.router.url === '/') {
      this.isHome = true;
      this.currentRouteClass = 'ruta-activa';
    }else {
      this.isHome = false;
      this.currentRouteClass = '';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = offset > 100;
  }

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
      '/proyectos/axion-roma',
      '/proyectos/alvear-1065',
      '/proyectos/perillo-1125',
      '/proyectos/sarmiento-249',
      '/proyectos/barzola-gruas',
      '/proyectos/cementerio-otoñal',
      '/proyectos/jockey-club',
      '/proyectos/junin-2816',
      '/proyectos/santafe-2189',
      '/proyectos/super-alem',
      '/proyectos/escuela-los-padres',
      '/proyectos/los-molles',
      '/proyectos/orsa',
      '/proyectos/polo-club',
      '/proyectos/roma-parador',
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

}

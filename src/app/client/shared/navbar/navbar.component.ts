import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import * as navbarConfig from '../../models/config/navbar-config.json';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  items: MenuItem[] | undefined;
  searchTerm: string = '';
  searchTermError: boolean = false;
  searchTermFound: boolean = false;
  isHome: boolean = false;
  currentRouteClass = '';
  isScrolled = false;
  isMobile = false;


  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.items = (navbarConfig as any).default.items;
    this.isMobile = window.innerWidth < 960; // Verificar si la pantalla es móvil (ancho menor a 960px)

    if (this.router.url === '/') {
      this.isHome = true;
      this.currentRouteClass = 'ruta-activa';
    }else {
      this.isHome = false;
      this.currentRouteClass = '';
    }

    this.updateMenu();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  this.isMobile = event.target.innerWidth < 960;
  this.updateMenu();
  }

  private updateMenu() {
    if (this.isMobile) {
      const indexNosotros = this.items?.findIndex(item => item.label === 'Nosotros');
      if (indexNosotros !== -1 && indexNosotros !== undefined) {
        this.items = this.items?.filter(item => item.label !== 'Proyectos'); // Filtrar por si ya existe 'Proyectos'
        this.items?.splice(indexNosotros + 1, 0, { label: 'Proyectos', icon: 'pi pi-wallet', routerLink: '/proyectos' });
      }
    } else {
      // Restaurar el menú original si la pantalla es grande
      this.items = (navbarConfig as any).default.items;
    }
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = offset > 75;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';


const routes: Routes = [
  {
    path: '',
    component: ProyectosComponent,
  },
  {
    path: ':project', // :project es un parámetro dinámico en la ruta
    component: ProyectosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosRoutingModule {}


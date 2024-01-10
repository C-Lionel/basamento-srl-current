import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';
import { SAgerComponent } from './pages/s-ager/s-ager.component';

let dynamicRoutes: Routes = [
  {
    path: 's-ager',
    component: SAgerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(dynamicRoutes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule {


}

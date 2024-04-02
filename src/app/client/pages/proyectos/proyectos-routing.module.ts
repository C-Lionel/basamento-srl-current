

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectosComponent,
    children: [
      {
        path: 'actuales',
        component: ProyectosComponent,
        data: { categoria: 'Actuales' }
      },
      {
        path: 'previos',
        component: ProyectosComponent,
        data: { categoria: 'Previos' }
      },
      {
        path: 'legado',
        component: ProyectosComponent,
        data: { categoria: 'Legado' }
      },

    ]
  },
  {
    path: ':proyecto',
    component: ProyectosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule {}









































// ASI FUNCIONABA

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ProyectosComponent } from './proyectos.component';


// const routes: Routes = [
//   {
//     path: '',
//     component: ProyectosComponent,
//     children: [
//       {
//         path: 'actuales',
//         component: ProyectosComponent,
//         data: { categoria: 'Actuales' }
//       },
//       {
//         path: 'previos',
//         component: ProyectosComponent,
//         data: { categoria: 'Previos' }
//       },
//       {
//         path: 'legado',
//         component: ProyectosComponent,
//         data: { categoria: 'Legado' }
//       },
//       {
//         path: ':project',
//         component: ProyectosComponent,
//       },
//     ]
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ProyectosRoutingModule {}



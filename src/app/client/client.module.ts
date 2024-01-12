import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientLayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../shared/primeng/primeng.module';


@NgModule({
  declarations: [
    ClientLayoutComponent,
    HomeComponent,
    NosotrosComponent,
    ProyectosComponent,
    ServiciosComponent,
    ContactoComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class ClientModule { }

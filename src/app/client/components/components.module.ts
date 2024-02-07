import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';



@NgModule({
  declarations: [
    GaleriaImagenesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GaleriaImagenesComponent
  ]
})
export class ComponentsModule { }

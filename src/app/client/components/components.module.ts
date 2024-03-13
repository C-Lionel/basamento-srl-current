import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';




@NgModule({
  declarations: [
    GaleriaImagenesComponent,

  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    GaleriaImagenesComponent,

  ]
})
export class ComponentsModule { }

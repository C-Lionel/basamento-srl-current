import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';
import { LoadingComponentComponent } from './loading-component/loading-component.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';




@NgModule({
  declarations: [
    GaleriaImagenesComponent,
    LoadingComponentComponent

  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    GaleriaImagenesComponent,
    LoadingComponentComponent

  ]
})
export class ComponentsModule { }

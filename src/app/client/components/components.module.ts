import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';
import { LoadingComponentComponent } from './loading-component/loading-component.component';
import { CardAnimatedComponent } from './card-animated/card-animated.component';
import { ButtonInfoCardComponent } from './button-info-card/button-info-card.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';




@NgModule({
  declarations: [
    GaleriaImagenesComponent,
    LoadingComponentComponent,
    CardAnimatedComponent,
    ButtonInfoCardComponent

  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    GaleriaImagenesComponent,
    LoadingComponentComponent,
    CardAnimatedComponent,
    ButtonInfoCardComponent

  ]
})
export class ComponentsModule { }

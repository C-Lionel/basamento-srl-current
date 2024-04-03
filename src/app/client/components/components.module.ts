import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';
import { LoadingComponent } from './loading/loading.component';
import { CardAnimatedComponent } from './card-animated/card-animated.component';
import { ButtonInfoCardComponent } from './button-info-card/button-info-card.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';




@NgModule({
  declarations: [
    GaleriaImagenesComponent,
    LoadingComponent,
    CardAnimatedComponent,
    ButtonInfoCardComponent,

  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    GaleriaImagenesComponent,
    LoadingComponent,
    CardAnimatedComponent,
    ButtonInfoCardComponent,
  ]
})
export class ComponentsModule { }

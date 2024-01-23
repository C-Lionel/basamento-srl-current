import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';



@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    DividerModule,
    CardModule,
    GalleriaModule
  ]
})
export class PrimengModule { }

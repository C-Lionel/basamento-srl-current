import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';



@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    DividerModule,
    CardModule
  ]
})
export class PrimengModule { }

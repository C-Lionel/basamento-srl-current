import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';



@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    DividerModule
  ]
})
export class PrimengModule { }

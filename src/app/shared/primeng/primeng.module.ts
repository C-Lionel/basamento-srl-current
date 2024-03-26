
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ScrollTopModule } from 'primeng/scrolltop';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton'












@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    DividerModule,
    CardModule,
    GalleriaModule,
    ImageModule,
    AccordionModule,
    ButtonModule,
    ScrollTopModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
  ]
})
export class PrimengModule { }

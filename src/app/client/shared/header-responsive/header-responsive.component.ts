import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-header-responsive',
  templateUrl: './header-responsive.component.html',
  styleUrl: './header-responsive.component.scss'
})
export class HeaderResponsiveComponent {

  @ViewChild('imagenElement') imagenElement!: ElementRef;

  scrollToImagen() {
    const imagenHeight = this.imagenElement.nativeElement.offsetHeight;
    const remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const offset = -5.5 * remInPixels;
    const scrollToValue = imagenHeight - offset;

    window.scrollTo({
      top: scrollToValue,
      behavior: 'smooth'
    });
  }

  WithDelay() {
    setTimeout(() => {
      this.scrollToImagen();
    }, 300);
  }



}

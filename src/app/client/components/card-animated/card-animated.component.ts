import { Component, ElementRef, HostListener, Input } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-card-animated',
  templateUrl: './card-animated.component.html',
  styleUrl: './card-animated.component.scss'
})
export class CardAnimatedComponent {
  @Input() svgName: string = '';
  @Input() title: string = '';
  @Input() subtitle_1: string = '';
  @Input() subtitle_2?: string = '';
  @Input() subtitle_3?: string = '';
  @Input() width: string = '15rem';
  @Input() height: string = '20rem';
  @Input() fontSize: string = '1.1em';
  @Input() fontSizeSpan: string = '4rem';
  @Input() top: string = '2.6em';
  @Input() fontSizeText: string = '1.3rem';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    Aos.init();
    this.toggleAOS();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.toggleAOS();
  }

  toggleAOS() {
    const element = this.el.nativeElement.querySelector('.e-card.playing');

    if (window.innerWidth <= 600) {
      element.removeAttribute('data-aos');
      element.removeAttribute('data-aos-easing');
      element.removeAttribute('data-aos-duration');
    } else {
      element.setAttribute('data-aos', 'flip-left');
      element.setAttribute('data-aos-easing', 'ease-out-cubic');
      element.setAttribute('data-aos-duration', '3000');
    }
    Aos.refresh();
  }
}

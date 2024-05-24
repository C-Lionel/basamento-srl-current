import { Component, ElementRef, HostListener, Input } from '@angular/core';

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

}

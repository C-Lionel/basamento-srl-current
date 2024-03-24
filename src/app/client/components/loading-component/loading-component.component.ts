import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrl: './loading-component.component.scss'
})
export class LoadingComponentComponent {
  @Input() isLoading: boolean = false;
}

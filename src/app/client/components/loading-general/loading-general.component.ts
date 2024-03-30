import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-general-component',
  templateUrl: './loading-general.component.html',
  styleUrl: './loading-general.component.scss'
})
export class LoadingGeneralComponent {
  @Input() isLoading: boolean = false;
}

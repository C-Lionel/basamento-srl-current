import { Component } from '@angular/core';


@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public arroba = '@';
  public fechaActual = new Date();

  public agno_actual: number = this.fechaActual.getFullYear();
}

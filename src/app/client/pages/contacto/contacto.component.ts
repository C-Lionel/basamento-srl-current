import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  formGroup!: FormGroup;
  value!: string;

  ngOnInit() {
    this.formGroup = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      mensaje: new FormControl(null, Validators.required),
    });


  }

  onSubmit() {
    if (this.formGroup.valid) {
      // Aquí puedes enviar los datos del formulario
      console.log(this.formGroup.value);
    } else {
      // Marca los campos inválidos
      this.formGroup.markAllAsTouched();
    }
  }

}

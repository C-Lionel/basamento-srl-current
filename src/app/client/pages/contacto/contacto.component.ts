import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  formGroup!: FormGroup;
  value!: string;
  public asunto: string = '';
  public arroba = '@';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      asunto: new FormControl(null),
      otros: new FormControl(null), // Nuevo campo para "Otros"
      mensaje: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const formData = { ...this.formGroup.value };
      console.log(formData);
      this.formGroup.reset();
      this.asunto = '';
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  updateAsunto(value: string) {
    this.formGroup.patchValue({ asunto: value });
    if (value !== 'Otros') {
      this.formGroup.patchValue({ otros: null });
    }
  }


}

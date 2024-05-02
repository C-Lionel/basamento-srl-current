import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      nombre: new FormControl(null, [Validators.required, this.noNumerosNiEspecialesValidator]),
      apellido: new FormControl(null, [Validators.required, this.noNumerosNiEspecialesValidator]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telefono: new FormControl(null, [Validators.required, this.telefonoValidator]),
      asunto: new FormControl(null, Validators.required),
      otros: new FormControl(null),
      mensaje: new FormControl(null),
    });

    // Validación dinámica para hacer el campo "otros" requerido si el asunto es "Otros"
    this.formGroup.get('asunto')!.valueChanges.subscribe((value) => {
      if (value === 'Otros') {
        this.formGroup.get('otros')!.setValidators([Validators.required, this.noNumerosNiEspecialesValidator]);
      } else {
        this.formGroup.get('otros')!.clearValidators();
      }
      this.formGroup.get('otros')!.updateValueAndValidity();
    });

  }

  onSubmit() {
    if (this.formGroup.valid) {
      const formData = { ...this.formGroup.value };
      Swal.fire({
        title: 'Está seguro que desea enviar el formulario?',
        text: 'Enviará un formulario de contacto que será respondido a la brevedad..',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          emailjs.send('service_jiyt6nk', 'template_tzm219p', formData, 'user_0rv8S2OYEBzS2Fp80CRNP')
            .then((response) => {
              console.log('Correo enviado correctamente', response.status, response.text);
              // Resetear el formulario después de enviar
              Swal.fire('¡Enviado!', 'El formulario ha sido enviado correctamente.', 'success');
              this.formGroup.reset();
              this.asunto = '';
            }).catch((e) => {
              console.log('Error al enviar el correo', e);
              Swal.fire('¡Error!', 'Hubo un problema al enviar el formulario.', 'error');
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Manejar el caso en el que se cancela la confirmación
          Swal.fire('Cancelado', 'No se ha enviado el formulario.', 'info');
        }
      });
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

  noNumerosNiEspecialesValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value && /[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/.test(control.value)) {
      return { 'noNumerosNiEspeciales': true };
    }
    return null;
  }

  telefonoValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const telefono = control.value;
    if (telefono && !/^\d+$/.test(telefono)) {
      return { 'soloNumeros': true };
    }
    return Validators.minLength(7)(control);
  }


}

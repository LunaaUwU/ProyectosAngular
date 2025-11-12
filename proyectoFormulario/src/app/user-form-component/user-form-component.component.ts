import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form-component.component.html',
  styleUrl: './user-form-component.component.css'
})
export class UserFormComponentComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    acceptPolicy: new FormControl(false, [Validators.requiredTrue])
  });

  onSubmit() {
    if (this.form.invalid) {
      console.log('Formulario inválido.');
      return;
    }

    const data = this.form.value;
    console.log('Datos del formulario:', data);
    localStorage.setItem('userForm', JSON.stringify(data));

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'userData.txt';
    link.click();
  }
}
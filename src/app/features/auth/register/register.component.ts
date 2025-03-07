import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    fName: new FormControl(null, Validators.required),
    lName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null,
      [Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
      ]),
    confirmPassword: new FormControl(null,
      [Validators.required,
      Validators.minLength(8),
      ]),
  }
  )
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  onSubmit() {
    const password = this.password?.value;
    const confirmPassword = this.confirmPassword?.value;

    if (password !== confirmPassword) {
      this.confirmPassword?.setErrors({ passwordMismatch: true });
    }
    if (this.registerForm.valid) {
      alert('Successful Signup!');
    } else {
      alert('Signup Failed');
    }
  }
}

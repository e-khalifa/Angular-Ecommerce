import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { v4 as generateId } from 'uuid'
import { User } from '../../../shared/utils/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  usersData: any;
  constructor(private myUserService: UsersService, private router: Router) { }
  ngOnInit(): void {
    this.myUserService.getAllUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.usersData = data
      },
      error: (err) => { console.log(err) }
    });
  }
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
  get fName() {
    return this.registerForm.get('fName');
  }
  get lName() {
    return this.registerForm.get('lName');
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const user = this.usersData.find((u: any) => u.email === this.email?.value);
      if (user) {
        this.registerForm.controls['email'].setErrors({ found: true });
        return;
      }
      if (this.password?.value !== this.confirmPassword?.value) {
        this.confirmPassword?.setErrors({ passwordMismatch: true });
        return;
      }

      const newUser: User = {
        id: generateId(), fName: this.fName?.value ?? null,
        lName: this.lName?.value ?? null,
        email: this.email?.value ?? null,
        password: this.password?.value ?? null
      }

      this.myUserService.addANewUser(newUser).subscribe({
        next: () => {
          const token = btoa(newUser.id);
          localStorage.setItem('token', token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error registering user:', err);
        }
      });
    }
  }
}


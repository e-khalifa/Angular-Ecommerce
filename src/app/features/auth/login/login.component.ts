import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  usersData: any;

  constructor(private myUserService: UsersService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/profile']);
      return;
    }

    this.myUserService.getAllUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.usersData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      ),
    ]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.usersData.find(
        (u: any) => u.email === this.email?.value
      );
      if (!user) {
        this.loginForm.controls['email'].setErrors({ notFound: true });
      } else if (user.password !== this.password?.value) {
        this.loginForm.controls['password'].setErrors({
          incorrectPassword: true,
        });
      } else {
        const token = btoa(user.id);
        localStorage.setItem('token', token);

        this.router.navigate(['/home']);
      }
    }
  }
}

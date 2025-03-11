import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
})
export class PasswordComponent {
  user = {
    firstName: 'Yousef',
    lastName: 'Hamdy',
    avatar: 'profileImg.png',
  };
  password: string = '123456Q@';
  showPassword: boolean = false;
  isEditing: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleEdit(): void {
    if (this.isEditing) {
      console.log('Password saved:', this.password);
    }
    this.isEditing = !this.isEditing;
  }
}

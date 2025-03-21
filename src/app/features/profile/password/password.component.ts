import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  user: any = { password: '' };
  showPassword: boolean = false;
  isEditing: boolean = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const userId = token ? atob(token) : null;

    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (foundUser) => {
          this.user = foundUser;
        },
        error: (err) => {
          console.error('User not found', err);
        },
      });
    } else {
      console.error('No userId found in localStorage');
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleEdit(): void {
    if (this.isEditing && this.user.id) {
      this.userService.getUserById(this.user.id).subscribe({
        next: (currentUser) => {
          const updatedUser = { ...currentUser, password: this.user.password };
          this.userService.editUserData(this.user.id, updatedUser).subscribe({
            next: () => {
              console.log('Password updated successfully');
            },
            error: (err) => {
              console.error('Error updating password:', err);
            },
          });
        },
        error: (err) => {
          console.error('Error fetching user data:', err);
        },
      });
    }

    this.isEditing = !this.isEditing;
  }
}

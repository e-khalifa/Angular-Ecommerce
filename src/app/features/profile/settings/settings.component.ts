import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  user: any = {};
  isEditing = false;

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

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  uploadPhoto(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.avatar = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  deleteAvatar(): void {
    this.user.avatar = 'profileImgRemove.png';
  }

  saveChanges(): void {
    if (this.user.id) {
      this.userService.editUserData(this.user.id, this.user).subscribe({
        next: (updatedUser) => {
          console.log('User updated successfully:', updatedUser);
          this.isEditing = false;
        },
        error: (err) => {
          console.error('Error updating user:', err);
        },
      });
    } else {
      console.error('User ID not found, unable to update.');
    }
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById(
      'upload-photo'
    ) as HTMLInputElement;
    fileInput.click();
  }
}

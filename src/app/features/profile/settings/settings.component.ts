import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  user = {
    firstName: 'Yousef',
    lastName: 'Hamdy',
    email: 'yousef.hamdy3108@gmail.com',
    mobile: '01204622141',
    gender: 'Male',
    avatar: 'profileImg.png',
  };
  isEditing = false;

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
    console.log('User details saved:', this.user);
    this.isEditing = false;
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById(
      'upload-photo'
    ) as HTMLInputElement;
    fileInput.click();
  }
}

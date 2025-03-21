import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  user: any = {};
  orders: any = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const userId = token ? atob(token) : null;

    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (foundUser) => {
          this.user = foundUser;
          this.orders = this.user.orders;
        },
        error: (err) => {
          console.error('User not found', err);
        },
      });
    } else {
      console.error('No userId found in localStorage');
    }
  }
}

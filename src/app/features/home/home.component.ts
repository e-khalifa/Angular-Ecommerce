import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../shared/utils/user';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  userId: any;
  user?: User;
  constructor(private myUserService: UsersService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.myUserService.getUserById(this.userId).subscribe({
        next: (data) => { this.user = data as User },
        error: (err) => { console.log(err) }
      });
    }
  }


}

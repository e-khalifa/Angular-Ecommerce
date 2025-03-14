import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../shared/utils/user';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { OneProductComponent } from '../one-product/one-product.component';


@Component({
  selector: 'app-home',
  imports: [RouterModule,OneProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  userId: any;
  user?: User;

  allProductData: any;
  constructor(private myUserService: UsersService, private myProducts: ProductsService) {

  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.myUserService.getUserById(this.userId).subscribe({
        next: (data) => { this.user = data as User },
        error: (err) => { console.log(err) }
      });
    }

    this.myProducts.getAllData().subscribe({
      next: (data) => {
        this.allProductData = data
      },
      error: (error) => {
        console.log(error);

      }
    })
  }

}

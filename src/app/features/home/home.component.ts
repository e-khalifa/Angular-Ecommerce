import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../shared/utils/user';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { OneProductComponent } from '../one-product/one-product.component';


@Component({
  selector: 'app-home',
  imports: [RouterModule, OneProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  userId: any;
  user?: User;
  allProductData: any;
  constructor(private myProducts: ProductsService, private myUserService: UsersService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const userId = token ? atob(token) : null;
    if (this.userId) {
      this.myUserService.getUserById(this.userId).subscribe({
        next: (data) => { this.user = data as User },
        error: (err) => { console.log(err) }
      });
    }

    this.myProducts.getAllData().subscribe({
      next: (data) => {
        this.allProductData = data;
        console.log(this.allProductData);
        // if (this.allProductData.products && Array.isArray(this.allProductData.products)) {
        //   this.allProductData = this.shuffleArray(this.allProductData.products);
        // } else {
        //   console.error("Unexpected API response format:", data);
        // }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  // Correct Shuffle Function
  // shuffleArray<T>(array: T[]): T[] {
  //   let shuffledArray = [...array]; // Copy to prevent mutation
  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap
  //   }
  //   return shuffledArray;
  // }
}

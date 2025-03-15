import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartItemsComponent } from '../Cart/cart-items/cart-items.component';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CartItemsComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styles: ``,
})
export class NavBarComponent implements OnInit {
  cart: any[] = [];

  constructor(private myCart: CartService, private router: Router) {}

  ngOnInit() {
    this.myCart.cart$.subscribe((cart) => {
      this.cart = cart;
    });

    this.cart = this.myCart.getCart();
  }

  OnLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}

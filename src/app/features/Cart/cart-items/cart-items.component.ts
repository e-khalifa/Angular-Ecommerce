import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart-items',
  imports: [RouterModule,CommonModule],
  templateUrl: './cart-items.component.html',
  styles: ``
})
export class CartItemsComponent implements OnInit {
  cartItems: any[] = []; 

  constructor(private myCart: CartService) {}

  ngOnInit() {
  
    this.myCart.cart$.subscribe((cart) => {
      this.cartItems = cart;
    });

   
    this.cartItems = this.myCart.getCart();
  }

  
  addToCart(product: any) {
    this.myCart.addToCart(product);
  }

  removeFromCart(product: any) {
    this.myCart.removeOneFromCart(product);
  }

  trashItem(product: any) {
    this.myCart.deleteFromCart(product.id);
    console.log('Item trashed:', product.title);
  }
}
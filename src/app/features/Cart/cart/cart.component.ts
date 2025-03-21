import { Component , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartTotalComponent } from "../cart-total/cart-total.component";
import { CartItemsComponent } from "../cart-items/cart-items.component";

@Component({
  selector: 'app-cart',
  imports: [RouterModule, CommonModule, CartTotalComponent, CartItemsComponent],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private myCart: CartService) {}

  ngOnInit() {
  
    this.myCart.cart$.subscribe((cart) => {
      this.cart = cart; 
    });

    this.cart = this.myCart.getCart();
  }
}

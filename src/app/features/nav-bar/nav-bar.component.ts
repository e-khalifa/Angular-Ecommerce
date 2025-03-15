import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItemsComponent } from "../Cart/cart-items/cart-items.component";
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CartItemsComponent,CommonModule],
  templateUrl: './nav-bar.component.html',
  styles: ``
})
export class NavBarComponent {
   constructor(myCart:CartService){
      this.cart=myCart.getCart();
      
    }
     cart:any;
}

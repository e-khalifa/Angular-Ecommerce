import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartTotalComponent } from "../cart-total/cart-total.component";
import { CartItemsComponent } from "../cart-items/cart-items.component";
@Component({
  selector: 'app-card',
  imports: [RouterModule, CommonModule, CartTotalComponent, CartItemsComponent],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {
  constructor(myCart:CartService){
    this.cart=myCart.getCart();
    
  }
   cart:any;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cart-total',
  imports: [RouterModule],
  templateUrl: './cart-total.component.html',
  styles: ``
})
export class CartTotalComponent {
  constructor(private myCart:CartService){
    this.total=this.myCart.getTotal()
  }
   total:number;
}

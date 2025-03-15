import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-checkout',
  imports: [RouterModule],
  templateUrl: './checkout.component.html',
  styles: ``
})
export class CheckoutComponent {
  constructor(private myCart:CartService){
    this.total=this.myCart.getTotal();
    this.cart=myCart.getCart();
  }
  cart:any; 
  total:number;
}

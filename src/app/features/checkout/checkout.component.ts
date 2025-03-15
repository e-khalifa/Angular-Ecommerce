import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-checkout',
  imports: [RouterModule,CommonModule],
  templateUrl: './checkout.component.html',
  styles: ``
})
export class CheckoutComponent {
  constructor(private myCart:CartService){
    this.cart=myCart.getCart();

  }
  cart: any[] = []; 
  total:number=0;
  done:boolean=false;
  
  ngOnInit() {
    
    this.myCart.cart$.subscribe((cart) => {
      this.total = this.myCart.getTotal(); 
    });

    this.total = this.myCart.getTotal();
  }


  toggleVisibilty=()=>{
    this.done=!this.done;
  }
}

import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [RouterModule,CommonModule],
  templateUrl: './checkout.component.html',
  styles: ``
})
export class CheckoutComponent implements OnInit{
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
 
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

    console.log(window.paypal);
    this.total = this.myCart.getTotal();
    window.paypal.Buttons().render(this.paymentRef.nativeElement);

  }


  toggleVisibilty=()=>{
    this.done=!this.done;
  }
}

import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  imports: [RouterModule,CommonModule],
  templateUrl: './checkout.component.html',
  styles: ``
})
export class CheckoutComponent implements OnInit{
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
 
  constructor(private myCart:CartService ,protected router: Router){
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
    window.paypal.Buttons(
      {
        createOrder: (data:any, actions:any)=> {
            return actions.order.create({
            purchase_units: [
              {
              amount: {
                value: this.total,
              },
              },
            ],
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
            const transactionId = details.id;
            const drawer = document.createElement('div');
            drawer.className = 'offcanvas show';
            drawer.style.position = 'fixed';
            drawer.style.top = '0';
            drawer.style.left = '0';
            drawer.style.width = '100%';
            drawer.style.height = '100%';
            drawer.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
            drawer.style.zIndex = '1050';
            drawer.style.display = 'flex';
            drawer.style.justifyContent = 'center';
            drawer.style.alignItems = 'center';
            drawer.innerHTML = `
              <div style="background: white; padding: 20px; border-radius: 8px; max-width: 500px; text-align: center;">
                <h5>Order Confirmation</h5>
                <p>Thank you for your order!</p>
                <p>Transaction ID: ${transactionId}</p>
                <button type="button" class="btn btn-outline-dark" id="closeDrawer">Close</button>
              </div>
            `;
            document.body.appendChild(drawer);

            const closeDrawerButton = drawer.querySelector('#closeDrawer');
            closeDrawerButton?.addEventListener('click', () => {
              document.body.removeChild(drawer);
            });

            this.myCart.clearCart();
            this.router.navigate(['/']);
            console.log("Payment successful");
            });
          },
          onError: (err: any) => {
          console.log(err);
        },
      }
    ).render(this.paymentRef.nativeElement);

  }


  toggleVisibilty=()=>{
    this.done=!this.done;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  orders = [
    {
      name: 'T-shirt',
      description: 'Red / V-neck',
      price: '560.98 EGP',
      quantity: 2,
      image: 'Tshirt.jpg',
    },
    {
      name: 'Pants',
      description: 'Blue / Long',
      price: '560.98 EGP',
      quantity: 1,
      image: 'pants.jpg',
    },
    {
      name: 'Short',
      description: 'Khaki / Short',
      price: '560.98 EGP',
      quantity: 3,
      image: 'short.jpg',
    },
    {
      name: 'Shirt',
      description: 'Blue / Long',
      price: '560.98 EGP',
      quantity: 4,
      image: 'shirt.jpg',
    },
  ];
}

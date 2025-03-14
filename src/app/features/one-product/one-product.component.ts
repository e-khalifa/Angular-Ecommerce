import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-one-product',
  imports: [RouterModule],
  templateUrl: './one-product.component.html',
  styleUrl: './one-product.component.css'
})
export class OneProductComponent {
  @Input() oneProduct: any
}

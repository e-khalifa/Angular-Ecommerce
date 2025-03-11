import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {
   flag:boolean=false;
}

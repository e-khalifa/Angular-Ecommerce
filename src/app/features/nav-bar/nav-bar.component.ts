import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule,CardComponent],
  templateUrl: './nav-bar.component.html',
  styles: ``
})
export class NavBarComponent {

}

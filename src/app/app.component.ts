import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { FooterComponent } from "./features/footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [RouterModule, NavBarComponent, HttpClientModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-ecommerce';
}

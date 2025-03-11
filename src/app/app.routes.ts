import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { CardComponent } from './features/card/card.component';
import { AboutComponent } from './features/about/about.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { ProfileComponent } from './features/profile/profile.component';
import { OrdersComponent } from './features/profile/orders/orders.component';
import { SettingsComponent } from './features/profile/settings/settings.component';
import { PasswordComponent } from './features/profile/password/password.component';

export const routes: Routes = [
  // { path: 'login', component: LoginComponent, title: 'Login' },
  {
    path: 'login',
    component: ProfileComponent,
    children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'passwords', component: PasswordComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
    ],
  },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'card', component: CardComponent, title: 'Card' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contactus', component: ContactUsComponent, title: 'Contact Us' },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

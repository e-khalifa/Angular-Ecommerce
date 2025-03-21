import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { CartComponent } from './features/Cart/cart/cart.component';
import { AboutComponent } from './features/about/about.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { ProfileComponent } from './features/profile/profile.component';
import { OrdersComponent } from './features/profile/orders/orders.component';
import { SettingsComponent } from './features/profile/settings/settings.component';
import { PasswordComponent } from './features/profile/password/password.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { AuthGuard } from './features/auth/auth.guard';
import { ProductsComponent } from './features/products/products.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { ErrorComponent } from './services/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductsComponent, title: 'Products' },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    title: 'Products Details',
  },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contactus', component: ContactUsComponent, title: 'Contact Us' },
  { path: 'checkout', component: CheckoutComponent, title: 'Checkout', canActivate: [AuthGuard] },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'passwords', component: PasswordComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
    ],
  },
  { path: '**', component: ErrorComponent, title: 'Error' },
];

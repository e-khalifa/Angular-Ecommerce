import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent, title: "Login" },
    { path: "register", component: RegisterComponent, title: "Register" },
    { path: "home", component: HomeComponent, title: "Home" },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

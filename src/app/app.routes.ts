import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent, title: "Login" },
    { path: "register", component: RegisterComponent, title: "Register" },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

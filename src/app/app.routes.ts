import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home', component: HomeComponent
            },
            {
                path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
            },
            {
                path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
            }
        ]
    }
];

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MERCHANT_ROUTES } from './pages/merchant/merchant.routes';
import { NgModule } from '@angular/core';
import { MerchantComponent } from './pages/merchant/merchant.component';
// import { authGuard } from './auth/auth.guard';

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
            },
            {
                path: 'merchant',
                children: MERCHANT_ROUTES
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
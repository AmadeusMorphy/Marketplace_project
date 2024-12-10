import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MERCHANT_ROUTES } from './pages/merchant/merchant.routes';
import { NgModule } from '@angular/core';
import { ADMIN_ROUTES } from './pages/admin/admin.routes';
// import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
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
                path: 'merchant-register', loadComponent: () => import('./pages/merchant-register/merchant-register.component').then(m => m.MerchantRegisterComponent)
            },
        ]
    },
    { path: 'merchant', children: MERCHANT_ROUTES},
    { path: 'admin', children: ADMIN_ROUTES },
    { path: '**', loadComponent: () => import('./pages/error/error.component').then(m => m.ErrorComponent) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
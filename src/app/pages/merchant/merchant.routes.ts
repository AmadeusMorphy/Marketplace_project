import { Routes } from "@angular/router";
import { MerchantComponent } from "./merchant.component";
import { DASHBOARD, MESSAGES, PRODUCTS, SETTINGS, STORE } from "./merchant.constants";
import { authGuard } from "../../auth/auth.guard";
import { MerchantProductsComponent } from "./merchant-products/merchant-products.component";
import { MerchantDashboardComponent } from "./merchant-dashboard/merchant-dashboard.component";


export const MERCHANT_ROUTES: Routes = [

    {
        path: '',
        component: MerchantComponent,
        children: [
            {
                path: DASHBOARD,
                component: MerchantDashboardComponent
            },
            {
                path: STORE,
                loadComponent: () => import('./merchant-store/merchant-store.component').then(m => m.MerchantStoreComponent)
            },
            {
                path: PRODUCTS,
                component: MerchantProductsComponent
            },
            {
                path: MESSAGES,
                loadComponent: () => import('./merchant-messages/merchant-messages.component').then(m => m.MerchantMessagesComponent)
            },
            {
                path: SETTINGS,
                loadComponent: () => import('./merchant-settings/merchant-settings.component').then(m => m.MerchantSettingsComponent)
            }
        ]
    }
]

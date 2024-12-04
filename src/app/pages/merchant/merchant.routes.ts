import { Routes } from "@angular/router";
import { MerchantComponent } from "./merchant.component";
import { ADD_PRODUCT, DASHBOARD, MESSAGES, PRODUCTS, SETTINGS, STORE } from "./merchant.constants";


export const MERCHANT_ROUTES: Routes = [

    {
        path: '',
        component: MerchantComponent,
        children: [
            {
                path: DASHBOARD,
                loadComponent: () => import('./merchant-dashboard/merchant-dashboard.component').then(m => m.MerchantDashboardComponent)
            },
            {
                path: STORE,
                loadComponent: () => import('./merchant-store/merchant-store.component').then(m => m.MerchantStoreComponent)
            },
            {
                path: PRODUCTS,
                loadComponent: () => import('./merchant-products/merchant-products.component').then(m => m.MerchantProductsComponent)
            },
            {
                path: ADD_PRODUCT,
                loadComponent: () => import('./merchant-products/merchant-add-product/merchant-add-product.component').then(m => m.MerchantAddProductComponent)
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

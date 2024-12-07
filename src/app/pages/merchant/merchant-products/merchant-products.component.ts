import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MerchantService } from '../merchant.service';
import { MerchantAddProductComponent } from "../dialogs/merchant-add-product/merchant-add-product.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-merchant-products',
  imports: [CommonModule, ButtonModule, MerchantAddProductComponent],
  templateUrl: './merchant-products.component.html',
  styleUrl: './merchant-products.component.scss'
})
export class MerchantProductsComponent implements OnInit {

  products: any;
  addProductDialog = false;
  isBrowser: boolean;

  constructor(
    private _merchantService: MerchantService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.getMerchantProducts();
    }
  }

  getMerchantProducts() {
    this._merchantService.getMerchantProducts().subscribe(
      (res: any) => {
        this.products = res.products;
        console.log('Merchant products:', res);
      },
      (error) => {
        console.error('Error fetching merchant products:', error);
      }
    );
  }

  isNewProduct(product: any): boolean {
    if (!this.isBrowser) return false; // Skip this check on the server
    const createdDate = new Date(product.created_at);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return createdDate > thirtyDaysAgo;
  }

  getSpecKeys(spec: any): string[] {
    return Object.keys(spec);
  }

  calculateOriginalPrice(price: number, discount: string): number {
    const discountPercent = parseFloat(discount);
    return Number((price / (1 - discountPercent / 100)).toFixed(2));
  }

  addProduct() {
    this.addProductDialog = true;
  }
}
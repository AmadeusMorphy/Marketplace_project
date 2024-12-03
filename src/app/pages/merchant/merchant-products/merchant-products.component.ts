import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductsService } from '../../../services/products/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LocalstorageService } from '../../../services/localstorage/localstorage.service';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-merchant-products',
  imports: [CommonModule, ButtonModule],
  templateUrl: './merchant-products.component.html',
  styleUrl: './merchant-products.component.scss'
})
export class MerchantProductsComponent implements OnInit {

  products: any;

  constructor(
    private _merchantService: MerchantService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getMerchantProducts()
  }

  getMerchantProducts() {

    this._merchantService.getMerchantProducts().subscribe(
      (res: any) => {
        console.log('Merchant products:', res);
      },
      (error) => {
        console.error('Error fetching merchant products:', error);
      }
    );
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  products: any;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _httpClient: HttpClient,

  ) {}

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this._httpClient.get(`${environment.server}products`).subscribe(
      (res: any) => {
        console.log("Products: ", res);
        this.products = res.products;
        
      }
    )
  }
}

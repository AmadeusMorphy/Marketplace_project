import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, ButtonModule, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

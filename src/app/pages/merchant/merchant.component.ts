import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-merchant',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './merchant.component.html',
  styleUrl: './merchant.component.scss'
})
export class MerchantComponent {

}

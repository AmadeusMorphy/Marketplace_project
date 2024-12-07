import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fadeAnimation } from '../../widgets/animations/fade.animation';
import { TabMenuModule } from 'primeng/tabmenu';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopup, ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { MerchantService } from './merchant.service';

@Component({
  selector: 'app-merchant',
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    TabMenuModule,
    ToastModule,
    ConfirmPopupModule
  ],
  templateUrl: './merchant.component.html',
  styleUrl: './merchant.component.scss',
  animations: [fadeAnimation],
  providers: [ConfirmationService, MessageService]
})
export class MerchantComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _merchantService: MerchantService
  ) { }

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('userType');

      if (token && (userType === 'merchant')) {

        this.getMerchantData();
        this.loadMenuBar();
        this._cdr.detectChanges();
      } else {
        this._router.navigate(['/404']);
      }
    }
  }

  getMerchantData() {
    this._merchantService.getMerchantProfile().subscribe(
      (res: any) => {

        this._merchantService.getMerchantStores().subscribe(
          (res: any) => {
          }
        )
      }
    )
  }

  loadMenuBar() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/merchant/merchant-dashboard'
      },
      {
        label: 'Store',
        icon: 'pi pi-shop',
        routerLink: '/merchant/merchant-store'
      },
      {
        label: 'Products',
        icon: 'pi pi-box',
        routerLink: '/merchant/merchant-products'
      },
      {
        label: 'Messages',
        icon: 'pi pi-inbox',
        routerLink: '/merchant/merchant-messages'
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: '/merchant/merchant-settings'
      }
    ]
  }
}

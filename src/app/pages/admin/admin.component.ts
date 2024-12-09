import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { fadeAnimation } from '../../widgets/animations/fade.animation';

@Component({
  selector: 'app-admin',
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    TabMenuModule,
    ToastModule,
    ConfirmPopupModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  animations: [fadeAnimation]
})
export class AdminComponent {

  items: MenuItem[] | undefined;
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.loadMenuBar();

  }



  loadMenuBar() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/admin/dashboard'
      },
      {
        label: 'Stores',
        icon: 'pi pi-shop',
        routerLink: '/admin/stores'
      },
      {
        label: 'Merchants',
        icon: 'pi pi-users',
        routerLink: '/admin/merchants'
      },
      {
        label: 'Products',
        icon: 'pi pi-box',
        routerLink: '/admin/products'
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: '/admin/settings'
      }
    ];
  }
}


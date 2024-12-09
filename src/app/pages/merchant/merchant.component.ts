import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation } from '../../widgets/animations/fade.animation';
import { TabMenuModule } from 'primeng/tabmenu';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { MerchantService } from './merchant.service';
import { MerchantPortalComponent } from "./merchant-portal/merchant-portal.component";
import { SidenavComponent } from './sidenav/sidenav.component';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-merchant',
  imports: [
    CommonModule,
    ButtonModule,
    TabMenuModule,
    ToastModule,
    ConfirmPopupModule,
    MerchantPortalComponent,
    SidenavComponent
],
  templateUrl: './merchant.component.html',
  styleUrl: './merchant.component.scss',
  animations: [fadeAnimation],
  providers: [ConfirmationService, MessageService]
})
export class MerchantComponent implements OnInit {

  items: MenuItem[] | undefined;
  isBrowser: boolean;

  isSideNavCollapsed = false;
  screenWidth = 0;


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _merchantService: MerchantService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // this.loadMenuBar();
    this.initializeBrowserSpecificLogic();
  }

  private initializeBrowserSpecificLogic() {
    if(this.isBrowser) {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    if (token && userType === 'merchant') {
      this.getMerchantData();
    } else {
      this._router.navigate(['/404']);
    }
  }
  }

  getMerchantData() {
    if(this.isBrowser){
    this._merchantService.getMerchantProfile().subscribe(
      (res: any) => {
        this._merchantService.getMerchantStores().subscribe(
          (storesRes: any) => {
            // Handle stores data if needed
          }
        );
      }
    );}
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }

  // loadMenuBar() {
  //   this.items = [
  //     {
  //       label: 'Dashboard',
  //       icon: 'pi pi-home',
  //       routerLink: '/merchant/merchant-dashboard'
  //     },
  //     {
  //       label: 'Store',
  //       icon: 'pi pi-shop',
  //       routerLink: '/merchant/merchant-store'
  //     },
  //     {
  //       label: 'Products',
  //       icon: 'pi pi-box',
  //       routerLink: '/merchant/merchant-products'
  //     },
  //     {
  //       label: 'Messages',
  //       icon: 'pi pi-inbox',
  //       routerLink: '/merchant/merchant-messages'
  //     },
  //     {
  //       label: 'Settings',
  //       icon: 'pi pi-cog',
  //       routerLink: '/merchant/merchant-settings'
  //     }
  //   ];
  // }
}


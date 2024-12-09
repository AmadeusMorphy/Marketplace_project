import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MerchantService } from '../merchant.service';
import { MerchantCreateStoreComponent } from "../dialogs/merchant-create-store/merchant-create-store.component";
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-merchant-store',
  imports: [
    CommonModule,
    ButtonModule,
    MerchantCreateStoreComponent,
    DialogModule,
    SkeletonModule
  ],
  templateUrl: './merchant-store.component.html',
  styleUrl: './merchant-store.component.scss'
})
export class MerchantStoreComponent implements OnInit {

  stores: any;
  createStoreDialog = false;
  bgImageLoaded = false;
  logoImageLoaded = false;
  isTextLoading = false;

  isLoading = false;
  isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private _merchantService: MerchantService,
    private _cdr: ChangeDetectorRef,

  ) { 
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.getStores();
  }

  getStores() {
    this.isLoading = true;
    this.isTextLoading = true;

    if(this.isBrowser) {
    this._merchantService.getMerchantStores().subscribe(
      (res: any) => {
        console.log(res);
        
        if (res && res.stores && res.stores.length > 0) {
          this.stores = res.stores[0];
          this.isTextLoading = false;
        } else {
          this.stores = null;
        }
        this.isLoading = false;
        this._cdr.detectChanges();
      },
      (error) => {
        this.stores = null;
        this.isLoading = false;
        console.error('Error fetching stores:', error);
        this._cdr.detectChanges();
      }
    );
  }
  }

  onBgImageLoad() {
    this.bgImageLoaded = true;
    this._cdr.detectChanges();
  }

  onLogoImageLoad() {
    this.logoImageLoaded = true;
    this._cdr.detectChanges();
  }

  onCreateStore() {
    this.createStoreDialog = true;
  }
}


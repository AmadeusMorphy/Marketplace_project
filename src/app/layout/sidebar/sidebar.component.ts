import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { AuthService } from '../../auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    RouterLink
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  @Input() sideBarVisible: boolean = false;
  @Output() isSideBarHidden = new EventEmitter<void>();
  
  private isAuthSupscription: Subscription | undefined;
  private _unsubscribeAll: Subject<void> = new Subject<void>()

  isLoggingOut = false;
  isAuthenticated = false;

  isCustomer = false;
  isAdmin = false;
  isMerchant = false;

  userName: any;
  userType: any;
  token: any;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _authService: AuthService,
    private _router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit(): void {
    
    this.isAuthSupscription = this._authService.isAuthenticated$.subscribe(
      res => {
        this.isAuthenticated = res;
        
        this.checkUser();
        this._cdr.detectChanges();
      }
    )

    this.checkUser();

  }

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }

  checkUser() {
    if(isPlatformBrowser(this.platformId)) {
      this.token = localStorage.getItem('token');
      this.userType = localStorage.getItem('userType');
      this.userName = localStorage.getItem('fullName');

      if(this.isAuthenticated) {
        if(this.userType === 'admin') {
          this.isAdmin = true;
          this.isCustomer = false;
          this.isMerchant = false;
        }
        if(this.userType === 'merchant') {
          this.isMerchant = true;
          this.isAdmin = false;
          this.isCustomer = false;
        }
        if(this.userType === 'customer') {
          this.isCustomer = true;
          this.isAdmin = false;
          this.isMerchant = false;
        }
        this._cdr.detectChanges();
      }
    }
  }
  onLogin() {
    this.onHide();
    this._router.navigate(['/login']);
  }

  onRegister() {
    this.onHide();
    this._router.navigate(['/register']);
  }

  onMerchantRegister() {
    this.onHide();
    this._router.navigate(['/merchant-register']);
  }

  onLogout() {
    this.isLoggingOut = true;

    this._authService.onLogout().subscribe(
      () => {
        this.isLoggingOut = false;
        this.isCustomer = false;
        this.isAdmin = false;
        this.isMerchant = false;
        this.checkUser();
        this.onHide();
      }, () => {
        this.isLoggingOut = false;
      }
    );
    this._cdr.detectChanges();
  }

  onHide() {
    this.isSideBarHidden.emit();
    this.sideBarVisible = false;
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();

    if(this.isAuthSupscription) {
      this.isAuthSupscription.unsubscribe();
      this.userName = null;
      this.userType = null;
      this.token = null;
      this._cdr.detectChanges();
    }
  }


  /************ROUTES************/

  /*******MERCHANTS*******/

  public MERCHANT_DASHBOARD = '/merchant/dashboard';
  public MERCHANT_STORE = '/merchant/store';
  public MERCHANT_PRODUCTS = '/merchant/products';
  public MERCHANT_SETTINGS = '/merchant/settings';
  public MERCHANT_ADD_PRODUCT = '/merchant/add-product';

  /***********************/

  
  /*******ADMIN*******/

  public ADMIN_DASHBOARD = '/admin/dashboard';
  public ADMIN_MERCHANTS = '/admin/merchants';
  public ADMIN_STORE = '/admin/stores';
  public ADMIN_PRODUCTS = '/admin/products';
  public ADMIN_MESSAGES = '/admin/messages';
  public ADMIN_SETTINGS = '/admin/settings';

  /***********************/
}

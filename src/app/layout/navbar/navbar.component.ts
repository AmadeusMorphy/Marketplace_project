import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    ButtonModule,
    ToastModule,
    MenuModule,
    ButtonModule,
    SidebarComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {

  items: MenuItem[] | undefined;

  isAuthenticated = false;
  sideBarVisible = false;
  isAdmin = false;
  isLoading = false;
  private authSubscription: Subscription | undefined;
  private _unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _cdr: ChangeDetectorRef,
    private _authService: AuthService
  ) {}

  ngOnInit() {


    this.authSubscription = this._authService.isAuthenticated$.subscribe(
      res => {
        this.isAuthenticated = res //will be true or false;
        this.loadMenuItems();
        this._cdr.detectChanges()
      }
    )

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('userType');

      if(token && userType) {
        this._authService.updateAuthState(true);
      }
      if(userType === 'admin') {
        this.isAdmin = true;
      }
    }
  }

  loadMenuItems() {

    if (isPlatformBrowser(this.platformId)) {

      const userType = localStorage.getItem('userType');
      
      if(this.isAuthenticated && userType == 'admin') {
        this.isAdmin = true;
        this._cdr.detectChanges();
      } else {
        this.isAdmin = false;
        this._cdr.detectChanges();
      }

    if(this.isAuthenticated) {
      this.items = [
        {
          label: 'User',
          items: [
            {
              label: 'Logout',
              icon: 'pi pi-sign-out',
              command: () => this.onLogout()
            }
          ]
        }
      ];
    } else {
      this.items = [
        {
          label: 'User',
          items: [
            {
              label: 'Login',
              icon: 'pi pi-key',
              routerLink: ['/login']
            },
            {
              label: 'Register',
              icon: 'pi pi-user-plus',
              routerLink: ['/register']
            }
          ]
        }
      ];
    }
  }

    this._cdr.detectChanges();
  }

  showSideBar() {
    this.sideBarVisible = true;
  }

  hideSideBar() {
    this.sideBarVisible = false;
  }
  onLogout() {
    this._authService.onLogout().subscribe();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();

    if(this.authSubscription) {
      this.authSubscription.unsubscribe();
      this._cdr.detectChanges()
    }
  }
}

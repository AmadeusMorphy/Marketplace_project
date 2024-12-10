import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Output, Inject, PLATFORM_ID, EventEmitter, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../auth/auth.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ButtonModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()

  private isBrowser: boolean;
  isLoggingOut = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private authService: AuthService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId)
  }

  collapsed = false;
  screenWidth = 0;
  navData = [

    {
        routerLink: 'dashboard',
        icon: 'pi pi-chart-bar',
        label: 'Dashboard'
    },
    {
        routerLink: 'merchants',
        icon: 'pi pi-users',
        label: 'Merchants'
    },
    {
        routerLink: 'stores',
        icon: 'pi pi-shop',
        label: 'Stores'
    },
    {
        routerLink: 'products',
        icon: 'pi pi-box',
        label: 'Products'
    },
    {
        routerLink: 'messages',
        icon: 'pi pi-inbox',
        label: 'Messages'
    },
    {
        routerLink: 'settings',
        icon: 'pi pi-cog',
        label: 'Settings'
    }

];

  ngOnInit(): void {
    if(this.isBrowser) {
    this.screenWidth = window.innerWidth;
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  closeSideNav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  logout() {
    this.isLoggingOut = true;

    this.authService.onLogout().subscribe(
      () => {
        this.isLoggingOut = false;
      }, (error) => {
        console.error("Error logging out: ", error);
        this.isLoggingOut = false;
      }
    )
  }
}
import { Component } from '@angular/core';
import { fadeAnimation } from '../../widgets/animations/fade.animation';
import { AdminPortalComponent } from "./admin-portal/admin-portal.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-admin',
  imports: [AdminPortalComponent, SidenavComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  animations: [fadeAnimation]
})

export class AdminComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }
}
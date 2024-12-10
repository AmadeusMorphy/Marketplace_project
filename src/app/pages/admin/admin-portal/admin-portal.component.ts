import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { fadeAnimation } from '../../../widgets/animations/fade.animation';

@Component({
  selector: 'app-admin-portal',
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    TabMenuModule,
    ToastModule,
    ConfirmPopupModule
  ],
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.scss',
  animations: [fadeAnimation]
})
export class AdminPortalComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
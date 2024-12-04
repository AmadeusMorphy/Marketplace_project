import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '../../widgets/animations/fade.animation';
import { TabMenuModule } from 'primeng/tabmenu';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopup, ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';

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

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;

    accept() {
        this.confirmPopup.accept();
    }

    reject() {
        this.confirmPopup.reject();
    }

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Save your current process?',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

  ngOnInit() {
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
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.onLogout()
      }
    ]
  }

  onLogout() {
    console.log("smth happened");
    
  }
}

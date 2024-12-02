import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, ButtonModule, ToastModule, MenuModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  items: MenuItem[] | undefined;
  ngOnInit() {
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

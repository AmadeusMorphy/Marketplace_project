import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { fadeAnimation } from '../../widgets/animations/fade.animation';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    ButtonModule,
    SkeletonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeAnimation]
})
export class HomeComponent {

}

import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { fadeAnimation } from '../../widgets/animations/fade.animation';
import { SkeletonModule } from 'primeng/skeleton';
import { IpLocationService } from '../../services/IPLOCATION/ip-location.service';
import { error } from 'console';

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
export class HomeComponent implements OnInit{

  private isServer: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private _ipLocationService: IpLocationService
  ) {
    this.isServer = isPlatformServer(this.platformId)
  }

  ngOnInit(): void {
    if(this.isServer){
    this.getIpLocation();
  }}


  getIpLocation() {
    this._ipLocationService.getIpLocation_SSR().subscribe({
      next: (res: any) => {
        console.log("Location res: ", res);
      }, error: (error) => {
        console.error("Error stuff: ", error);
        
      }
    })
  }
}

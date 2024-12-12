import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../auth/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { fadeOut } from '../../widgets/animations/fadeout.animation';
import { NavbarService } from '../../services/navbar/navbar.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService, AuthService],
  animations: [fadeOut]
})
export class LoginComponent {
  private isBrowser: boolean;

  #document = inject(DOCUMENT);
  isDarkMode = false;

  isLoggingIn = false;
  loggedIn = false;
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', (Validators.required, Validators.email)),
    password: new FormControl('', (Validators.required))
  })

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _authService: AuthService,
    private _messagesService: MessageService,
    private _navbarService: NavbarService
  ) { 
    this.isBrowser = isPlatformBrowser(this.platformId)
  }

  ngOnInit(): void {
    if(this.isBrowser) {

      this._navbarService.checkTheme();

      this._navbarService.isDarkMode$.subscribe(
        res => {
          if(res === true) {
            this.isDarkMode = true;
          } else {
            this.isDarkMode = false;
          }
        }
      )
      this._cdr.detectChanges();
    }
    
  }
  onSubmit() {
    this.isLoggingIn = true;
    console.log(this.loginForm.value);

    this._authService.onLogin(this.loginForm.value).subscribe(
      (res: any) => {
        console.log("Logged:", res);

        this.loggedIn = true;

        if (res.user.userType === 'customer') {
          setTimeout(() => {
            this._router.navigate(['/']);
          }, 1300);
        } else if (res.user.userType === 'merchant') {
          setTimeout(() => {
            this._router.navigate(['/merchant/dashboard']);
          }, 1300);
        } else if (res.user.userType === 'admin') {
          setTimeout(() => {
            this._router.navigate(['/admin']);
          }, 1300);
        }
      }, () => {
        this.isLoggingIn = false;
      }
    );

  }
}

import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { fadeAnimation } from '../../widgets/animations/fade.animation';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { COUNTRIES } from '../../widgets/countries';
import { AuthService } from '../../auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-register',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
    CheckboxModule,
    DropdownModule,
    ToastModule
  ],
  templateUrl: './merchant-register.component.html',
  styleUrl: './merchant-register.component.scss',
  providers: [MessageService],
  animations: [fadeAnimation]
})
export class MerchantRegisterComponent {

  registerForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  countries: any[] | undefined;
  selectedCountry: string | undefined;
  isRegistering = false;

  constructor(
    private _messageService: MessageService,
    private _authService: AuthService,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        this.passwordComplexityValidator()
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.passwordMatchValidator()
      ])
    });

    // Add a listener to revalidate confirm password when password changes
    this.registerForm.get('password')?.valueChanges.subscribe(() => {
      this.registerForm.get('confirmPassword')?.updateValueAndValidity();
    });
  }

  ngOnInit() {
    this.countries = COUNTRIES;
  }

  onCountryChange(event: any) {
    this.selectedCountry = event.value;

    this.registerForm.get('country')?.setValue(this.selectedCountry);
    console.log(this.registerForm.value);
  }


  // Custom validator for password complexity
  passwordComplexityValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const lengthValid = value && value.length >= 6;
      const numberValid = /\d/.test(value);
      const specialCharValid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

      return lengthValid && numberValid && specialCharValid
        ? null
        : {
          passwordComplexity: {
            lengthValid,
            numberValid,
            specialCharValid
          }
        };
    };
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = this.registerForm?.get('password')?.value;
      const confirmPassword = control.value;

      return password === confirmPassword ? null : { 'passwordMismatch': true };
    };
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  isFormValid() {
    return this.registerForm.invalid;
  }

  onSubmit() {
    this.isRegistering = true;

    console.log(this.registerForm.value);

    const form = this.registerForm.value;

    const registerData = {
      email: form.email,
      password: form.password,
      userType: 'merchant',
      fullName: form.fullName
    }

    const merchantData = {
      email: form.email,
      full_name: form.fullName,
      country: form.country
    }

    this._authService.onRegister(registerData).subscribe(
      (res: any) => {
        const token = res.token;

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })

        this._authService.onMerchantRegister(merchantData, headers).subscribe(
          () => {
            this.isRegistering = false;
            this.registerForm.reset();

            this._messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Registered successfully!'
            })

            setTimeout(() => {
              this._router.navigate(['/login'])
            }, 1200);
            this._cdr.detectChanges();
          }, (error) => {
            this.isRegistering = false;
            console.error("Something wrong happened: ", error);

            this._messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Something wrong happened!'
            })
          }
        )
      }, (error) => {
        this.isRegistering = false;
        console.error("Error creating the user: ", error);
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong!'
        })
      }
    )
  }
}
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MerchantService } from '../../merchant.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { COUNTRIES } from '../../../../widgets/countries';
import { ImagesService } from '../../../../services/images/images.service';

@Component({
  selector: 'app-merchant-add-product',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    DialogModule,
    ToastModule,
    InputTextareaModule,
  ],
  templateUrl: './merchant-add-product.component.html',
  styleUrl: './merchant-add-product.component.scss',
  providers: [MessageService]
})
export class MerchantAddProductComponent implements OnInit {

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  categories = [
    { name: 'Fashion' },
    { name: 'Men' },
    { name: 'Kids' },
    { name: 'Sports' },
    { name: 'Electronics' },
    { name: 'Decor' },
    { name: 'Apple' }
  ]

  selectedCategory: any;

  countries: any;
  selectedCountry: any;

  productForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    category: new FormControl('', Validators.required),
    specifications: new FormControl([], Validators.required),
    mainImage: new FormControl('', Validators.required),
    images: new FormControl([], Validators.required),
    prodWithColors: new FormControl([], Validators.required),
    stock: new FormControl('', [Validators.required, Validators.min(0)]),
    countryOfOrigin: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    width: new FormControl('', Validators.required),
    unit_size: new FormControl('', Validators.required),
    sizes: new FormControl([], Validators.required),
    discount: new FormControl('', Validators.required),
    tags: new FormControl([], Validators.required),
  });

  mainImg: any;
  previewMainImg: any;

  additionImg: any;
  previewAdditionalImg: any;

  selectedMainImg: File | null = null;
  selectedAdditionalImg: File | null = null;
  errorMessage: string | null = null;

  isImgUploading = false;
  isSubmiting = false;
  constructor(
    private _merchantService: MerchantService,
    private _messageService: MessageService,
    private _imagesService: ImagesService,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.value;
    this.productForm.get('category')?.setValue(this.selectedCategory);
  }


  onCountryChange(event: any) {
    this.selectedCountry = event.value;

    this.productForm.get('contryOfOrigin')?.setValue(this.selectedCountry);
  }

  onMainImgSelect(event: any) {

    const file = event.target.files[0];
    this.selectedMainImg = file;
    if (file && file.type.startsWith('image/')) {
      // Check for duplicate images
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewMainImg = reader.result as string;;
        this._cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    }
    this.uploadMainImg();
  }

  async uploadMainImg() {
    this.isImgUploading = true;

    if (!this.selectedMainImg) {
      this.errorMessage = 'Please select a file first';
      return;
    }
    try {
      // Reset previous states
      this.errorMessage = null;
      // Upload the image
      const uploadedUrl = await this._imagesService.uploadImage(this.selectedMainImg);

      this.isImgUploading = false;

      // Log the upload for debugging
      this.mainImg = uploadedUrl;

      this.productForm.get('maing_img')?.patchValue(uploadedUrl);


    } catch (error: any) {
      this.errorMessage = error.response?.data?.error || 'Failed to upload image';
      console.error('Upload error:', error);
      this.isImgUploading = true;
    }
  }


  removeMainImg() {
    this.mainImg = null;
    this.previewMainImg = null;
    this.productForm.get('maing_img')?.patchValue('null');
    this._cdr.detectChanges();
  }


  isValid() {
    return this.productForm.invalid;
  }

  addProduct() {
    this.isSubmiting = true;
    console.log(this.productForm.value);

    setTimeout(() => {
      this.isSubmiting = false;
    }, 1200);
  }

  closeDialog() {
    this.visibleChange.emit(false);
  }
}

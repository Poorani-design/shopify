import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastService } from 'src/services/toast/toast.service';
import { BrandsService } from '../../service/brands.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {

  form:any;
  
  allbrand: any;
  brandFile: any;
  constructor(
    private toast: ToastService,
    private formBuilder: FormBuilder,
    private brandservice: BrandsService
  ){}
  ngOnInit() {
    this.form = this.formBuilder.group({
      brand_name: ['', Validators.required],
      status_id: ['', Validators.required],
      user_id: ['', Validators.required],
    });
    // Correct: Initialize the form group when declaring it
   
  }
  onFileSelected(event: any) {
    const fileInput = event.target;
    console.log('img target', fileInput);
    console.log('img length', fileInput.files.length);
    console.log('fileInput.files', fileInput.files[0]);
    if (fileInput.files.length > 0) {
      this.brandFile = fileInput.files[0];
    }

  }

  getBrand() {
    console.log('get brand');
    this.brandservice.getBrand((response: any) => {
      console.log('calling');
      console.log(response);
      this.allbrand = response.data;
    });
  }

  addBrand() {
    const formData = new FormData();

    formData.append('brand_name', this.form.value.brand_name);
    formData.append('status_id', this.form.value.status_id);
    formData.append('user_id', this.form.value.user_id);
    formData.append('image', this.brandFile);
    this.brandservice.create(formData, (response: any) => {
      if (response.status) {
        this.toast.showSuccess(response.message);
        this.getBrand();
      } else {
        this.toast.showError(response.message);
      }
    });
  }
}

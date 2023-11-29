import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastService } from 'src/services/toast/toast.service';
import { BrandsService } from './service/brands.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent {
  form: any;
  allbrand: any;
  brandFile: any;
  selectedId: any;
  getBrandData: any;
  editBrandForm: FormGroup;
  imageName: string = '1.jpg';
  constructor(
    private toast: ToastService,
    private formBuilder: FormBuilder,
    private brandservice: BrandsService
  ) {
    this.getBrand();

    //edit form group
    this.editBrandForm = this.formBuilder.group({
      edit_brand_id: [''],
      edit_brand_name: [''],
      edit_user_id: [''],
      edit_img: [''],
      edit_status_id:['']
    });
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
  ngOnInit() {
    this.form = this.formBuilder.group({
      brand_name: ['', Validators.required],
      status_id: ['', Validators.required],
      user_id: ['', Validators.required],
    });
    // Correct: Initialize the form group when declaring it
   
  }
  getBrand() {
    console.log('get brand');
    this.brandservice.getBrand((response: any) => {
      console.log('calling');
      console.log(response);
      this.allbrand = response.data;
    });
  }

  updateImageName(newImageName: string) {
    this.imageName = newImageName;
  }

  getSelectBrandId(id: any) {
    // this.selectedId={"brand_id":id};
    this.selectedId = id;
    this.brandservice.getSelectedId(this.selectedId);
    console.log(this.selectedId);
    this.brandservice.getSingleBrand(this.selectedId, (response: any) => {
      if (response.status) {
        this.getBrandData = response.data[0];
        this.editBrandForm.patchValue({
          edit_brand_id: response.data[0].brand_id,
          edit_brand_name: response.data[0].name,
          edit_user_id: response.data[0].user_id,
          edit_img: this.updateImageName(response.data[0].img),
          edit_status_id:response.data[0].status_id
        });
      } else {
        this.toast.showWarning('something wrong');
      }
    });
  }
  updateBrand(){
  //   const editBrandForm = new FormData();

  //   editBrandForm.append('brand_name', this.editBrandForm.value.brand_name);
  //   let selectedId=this.editBrandForm.value.status_id;
  //   editBrandForm.append('status_id', this.editBrandForm.value. );
  //   editBrandForm.append('user_id', this.editBrandForm.value.user_id);
  //   editBrandForm.append('image', this.brandFile);
  //   console.log(this.editBrandForm.value)
  //   this.brandservice.update(selectedId,editBrandForm, (response: any) => {
  //     if (response.status) {
        
  //       this.toast.showSuccess(response.message);
  //       this.getBrand();
  //     } else {
  //       this.toast.showError(response.message);
  //     }
  //   });
   }
}

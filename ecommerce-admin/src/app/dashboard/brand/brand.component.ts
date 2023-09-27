import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/services/toast/toast.service';
import { ApiService } from 'src/services/api.service';
import { BrandsService } from './service/brands.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
getparamsid:any;
  form:any;
  allbrand:any;
  brandFile:any;
  showPopup:boolean=true;
  constructor(private toast: ToastService,private api:ApiService,private formBuilder:FormBuilder, private brandservice:BrandsService){
    this.getBrand();
  }

  onFileSelected(event:any){
    const fileInput = event.target;
    console.log("img target", fileInput);
    console.log("img length", fileInput.files.length);
    console.log("fileInput.files", fileInput.files[0]);

    if (fileInput.files.length > 0) {
      this.brandFile = fileInput.files[0];
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      brand_name: ['', Validators.required],
      status_id: ['', Validators.required],
    });
  }

  addBrand(){
  
    const formData = new FormData();
    console.log('brand_name', this.form.value.brand_name);
    console.log('status_id', this.form.value.status_id);
    console.log('image', this.brandFile);
    formData.append('brand_name', this.form.value.brand_name);
    formData.append('status_id', this.form.value.status_id);
    formData.append('image', this.brandFile);
    this.brandservice.create(formData,(response:Boolean)=>{
      console.log(response);
    });
  this.toast.showSuccess("added successfully");
  this.showPopup=false;
  this.getBrand();
  }

  getBrand(){
    this.api.getBrand().subscribe((res)=>{
      console.log(res);
      this.allbrand=res.data;
    })  
  }
}

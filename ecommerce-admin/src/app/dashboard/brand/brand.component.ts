import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/services/toast/toast.service';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

  allbrand:any;
  constructor(private toast: ToastService,private api:ApiService){
    this.getBrand();
  }

  brand = new FormGroup({
    name:new FormControl(''),
    status:new FormControl(''),
    img:new FormControl(''),
    createdat:new FormControl(''),
    updatedat:new FormControl('')
  });

  addBrand(){
    console.log(this.brand.value);
    console.log(this.brand.valid);
    if(this.brand.valid){
      this.api.addBrand(this.brand.value).subscribe((res)=>{
        console.log("Data added success", JSON.stringify(res));
        this.brand.reset();
        
        this.toast.showSuccess('Product added successfully!');
        
      })
    }

  }
  getBrand(){
    this.api.getBrand().subscribe((res)=>{
      console.log(res);
      this.allbrand=res.data;
    })  
  }
}

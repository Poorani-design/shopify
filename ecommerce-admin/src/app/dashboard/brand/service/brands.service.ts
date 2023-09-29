import { Injectable } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private api:ApiService,private http: HttpClient) { }

  create(postData:any,callBackStatus:any){
    this.api.addBrandApi(postData).subscribe((response)=>{
      callBackStatus(response);
    });
  }

  getBrand(callBackStatus:any){
    this.api.getBrandApi().subscribe((response)=>{
      console.log("service", response);
      callBackStatus(response);
    })
  }
  getSingleBrand(selectedId:any,callBackStatus:any){
    this.api.getSingleBrandApi(selectedId).subscribe((response)=>{
      console.log("single brand", response);
      callBackStatus(response);
    })
  }
 
}

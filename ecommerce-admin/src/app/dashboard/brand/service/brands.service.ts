import { Injectable } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private apiService:ApiService) { }

  create(postData:any,callBackStatus:any){
    this.apiService.addBrand(postData).subscribe((response)=>{
      console.log("brandAdd response", response);
    });
  }
}

import { Injectable } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private api:ApiService,private http: HttpClient) { }

  create(postData:any,callBackStatus:any){
    this.addBrand(postData).subscribe((response)=>{
      console.log("brandAdd response", response);
    });
  }
     //add brand data
     addBrand(data:any):Observable<any>{
      return this.http.post(`${this.api.apiUrl}/addBrand`,data);
    }
     //get brand data
     getBrand(): Observable<any> {
      return this.http.get(`${this.api.apiUrl}/viewBrand`);
    }
}

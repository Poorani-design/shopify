import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 
  constructor(private api:ApiService,private http: HttpClient) { }

  create(postData:any,callBackStatus:any){
    this.addCategory(postData).subscribe((response)=>{
      console.log("brandAdd response", response);
    });
  }
     //add brand data
     addCategory(data:any):Observable<any>{
      return this.http.post(`${this.api.apiUrl}/addCategory`,data);
    }
     //get Category data
     getCategory(): Observable<any> {
      return this.http.get(`${this.api.apiUrl}/viewCategory`);
    }
}

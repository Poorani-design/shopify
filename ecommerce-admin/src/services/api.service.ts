import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BroadbandService } from './broadband.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,private broadband:BroadbandService) {
    console.log(this.apiUrl);
  }
  //======================================= ADMIN LOGIN START HERE ======================
  // check admin user are available in database
  getAdminUser(userdata:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/adminUserLoginAPI`,userdata);//apiurl, post, userdata
  }
// brand service start here
    //add brand data
    addBrandApi(data:any):Observable<any>{
      console.log(data);
      return this.http.post(`${this.apiUrl}/addBrand`,data);
    }
     //get brand data
     getBrandApi(): Observable<any> {
      return this.http.get(`${this.apiUrl}/viewBrand`);
    }
    getSingleBrandApi(selectedId:any):Observable<any>{
      return this.http.get(`${this.apiUrl}/viewBrandById/${selectedId}`);   
    }
    updateBrandApi(data:any):Observable<any>{
      return this.http.put(`${this.apiUrl}/editBrandById`, data); 
    }



}

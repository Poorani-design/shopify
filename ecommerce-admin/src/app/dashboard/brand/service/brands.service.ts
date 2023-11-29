import { Injectable } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private api:ApiService,private http: HttpClient) { }

    private selectedsubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectedId$= this.selectedsubject.asObservable();
  public selectedId :any;

  getSelectedId(selectedId:any){
    this.selectedId=selectedId;
    this.selectedsubject.next(this.selectedId);
    return this.selectedId;
  }
  create(postData:any,callBackStatus:any){
    this.api.addBrandApi(postData).subscribe((response)=>{
      callBackStatus(response);
    });
  }

  update(postData:any,callBackStatus:any){
    console.log("update brand service");
    this.api.updateBrandApi(postData).subscribe((response)=>{
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

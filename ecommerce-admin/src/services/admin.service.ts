import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { BroadbandService } from './broadband.service';
@Injectable({
  providedIn: 'root',
})
export class AdminService {

    constructor(private ApiService:ApiService,private broadband:BroadbandService){
    }
    adminlogin(postData:any,callbackStatus:any){
        this.ApiService.getAdminUser(postData).subscribe((res)=>{
            console.log(res);
            callbackStatus(res.status);
        });

    }

}
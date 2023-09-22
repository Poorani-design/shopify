import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private adminservice:AdminService) { }
    isAuthenticated() {
        return this.adminservice.adminlogin();
    }
}
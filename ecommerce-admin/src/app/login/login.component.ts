import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';
import { ToastService } from 'src/services/toast/toast.service';
// import { ApiService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 //Form Validables
 registerForm: any = FormGroup;
 submitted = false;
  username: any;
  password: any;

 constructor(private formBuilder: FormBuilder, private router:Router,  private adminservice: AdminService,private toastService:ToastService) {}
 //Add user form actions
 get f() {
   return this.registerForm.controls;
 }
 onSubmit() {
    if (this.registerForm.valid) {
      this.adminservice.adminlogin(this.registerForm.value,(response:boolean)=>{
        if(response){
          
          this.toastService.showSuccess('Login Successfully');
          this.router.navigateByUrl('/home');
        }        
        else{
          console.log("invalid credentials");
          this.toastService.showError('Invalid credentials!');
        }
      });
   }
   else{
    this.toastService.showError('Please provide correct username'); 
  }
  }
 
 
 ngOnInit() {
   //Add User form validations
   this.registerForm = this.formBuilder.group({
     username: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required]],
   });

 }


}

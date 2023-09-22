import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProductComponent } from './dashboard/product/product.component';// Import the module
import {RouterModule} from '@angular/router';
import { SettingComponent } from './dashboard/setting/setting.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { BrandComponent } from './dashboard/brand/brand.component';
import { RoleComponent } from './dashboard/role/role.component';
import { DiscountComponent } from './dashboard/discount/discount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    ProductComponent,
    SettingComponent,
    CategoryComponent,
    BrandComponent,
    RoleComponent,
    DiscountComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ToastrModule.forRoot() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

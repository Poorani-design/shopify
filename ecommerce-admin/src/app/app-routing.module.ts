import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandComponent } from './dashboard/brand/brand.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DiscountComponent } from './dashboard/discount/discount.component';
import { ProductComponent } from './dashboard/product/product.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RoleComponent } from './dashboard/role/role.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'brand', component: BrandComponent },
      { path: 'role', component: RoleComponent },
      { path: 'discount', component: DiscountComponent },
      { path: 'settings', component: SettingComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

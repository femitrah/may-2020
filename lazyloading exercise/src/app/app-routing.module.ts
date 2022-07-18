import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'login',loadChildren:()=>import('./login/login.module').then(values=>values.LoginModule)},
  {path:'',loadChildren:()=>import('./login/login.module').then(values=>values.LoginModule)},
  {path:'main',loadChildren:()=>import('./main/main.module').then(values=>values.MainModule)},
  {path:'order',loadChildren:()=>import('./main/order/order.module').then(values=>values.OrderModule)},
  {path:'customer',loadChildren:()=>import('./main/customer/customer.module').then(values=>values.CustomerModule)},
  {path:'**',loadChildren:()=>import('./login/login.module').then(values=>values.LoginModule)},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

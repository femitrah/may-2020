import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from '../share/header/header.component';
import { FooterComponent } from '../share/footer/footer.component';



const routes:Routes=[
  {path:'',component:MainComponent,
  children: [
    {
      path: 'order',loadChildren:()=>import('./order/order.module').then(values=>values.OrderModule), 
    },
    {
      path:'customer',loadChildren:()=>import('./customer/customer.module').then(root=>root.CustomerModule)

    }
  ]
  }
]

@NgModule({
  declarations: [
    CustomerComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }

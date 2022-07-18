import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,Routes } from '@angular/router';
import { CancelledComponent } from './cancelled.component';
import { __values } from 'tslib';

const routes:Routes=[
  {path:'',component:CancelledComponent,
  children:[
    {path:'cancelledorderlist',loadChildren:()=>import('./cancelledorderlist/cancelledorderlist.module').then(values=>values.CancelledorderlistModule)}
  ]},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CancelledModule { }

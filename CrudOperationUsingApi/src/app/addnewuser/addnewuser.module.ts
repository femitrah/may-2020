import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddnewuserComponent } from './addnewuser.component';

const routes:Routes=[
  {path:'',component:AddnewuserComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AddnewuserModule { }

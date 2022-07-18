import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CompletedComponent } from './completed.component';




const routes:Routes=[
 {path:'',component:CompletedComponent,
 children:[
 {path:'completedorderlist',loadChildren:()=>import("./completedorderlist/completedorderlist.module").then(root=>root.CompletedorderlistModule)}
 ]},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompletedModule { }

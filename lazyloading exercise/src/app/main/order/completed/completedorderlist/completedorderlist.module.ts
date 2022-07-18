import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CompletedorderlistComponent } from './completedorderlist.component';

const routes:Routes=[
  {path:'',component:CompletedorderlistComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompletedorderlistModule { }

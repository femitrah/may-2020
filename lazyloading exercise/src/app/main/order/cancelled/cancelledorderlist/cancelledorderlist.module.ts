import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CancelledorderlistComponent } from './cancelledorderlist.component';
const routes:Routes=[
  {path:'',component:CancelledorderlistComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CancelledorderlistModule { }

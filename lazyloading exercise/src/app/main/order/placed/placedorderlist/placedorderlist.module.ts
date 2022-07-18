import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PlacedorderlistComponent } from './placedorderlist.component';
const routes:Routes=[
  {path:'',component:PlacedorderlistComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlacedorderlistModule { }

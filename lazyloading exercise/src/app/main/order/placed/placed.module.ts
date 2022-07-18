import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PlacedComponent } from './placed.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
{path:'',component:PlacedComponent},
  {path:'placedorderlist',loadChildren:()=>import('./placedorderlist/placedorderlist.module').then(root=>root.PlacedorderlistModule)}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PlacedModule { }

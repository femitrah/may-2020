import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacedComponent } from './placed/placed.component';
import { CompletedComponent } from './completed/completed.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import { OrderComponent } from './order.component';
import { Routes,RouterModule } from '@angular/router';
import { PlacedorderlistComponent } from './placed/placedorderlist/placedorderlist.component';
import { CompletedorderlistComponent } from './completed/completedorderlist/completedorderlist.component';
import { CancelledorderlistComponent } from './cancelled/cancelledorderlist/cancelledorderlist.component';
import { FormsModule } from '@angular/forms';


const routes:Routes=[
{path:'',component: OrderComponent,
 children: [
  {
    path: 'placed',loadChildren:()=>import('./placed/placed.module').then(root=>root.PlacedModule)
  },
  {
    path:'completed',loadChildren:()=>import('./completed/completed.module').then(root=>root.CompletedModule)
 },
  {
    path:'cancelled',loadChildren:()=>import('./cancelled/cancelled.module').then(root=>root.CancelledModule) 
  }
]
}
]

@NgModule({
  declarations: [
    PlacedComponent,
    CompletedComponent,
    CancelledComponent,
    PlacedorderlistComponent,
    CompletedorderlistComponent,
    CancelledorderlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }

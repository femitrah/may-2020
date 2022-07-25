import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableViewComponent } from './table-view.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'',component:TableViewComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TableViewModule { }

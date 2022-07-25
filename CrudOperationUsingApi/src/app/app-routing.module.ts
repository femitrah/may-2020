import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path:'home',loadChildren:()=>import('./home/home.module').then(root=>root.HomeModule)},
   {path:'tableview',loadChildren:()=>import('./table-view/table-view.module').then(root=>root.TableViewModule)},
   {path:'addnewuser',loadChildren:()=>import('./addnewuser/addnewuser.module').then(root=>root.AddnewuserModule)},
   {path:'**',loadChildren:()=>import('./home/home.module').then(root=>root.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

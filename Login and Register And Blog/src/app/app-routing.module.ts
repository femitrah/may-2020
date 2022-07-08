import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogThreeComponent } from './blog-three/blog-three.component';
import { BlogComponent } from './blog/blog.component';
import { BlohTwoComponent } from './bloh-two/bloh-two.component';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginverifyGuard } from './loginverify.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'blog',component:BlogComponent,canActivate:[LoginverifyGuard]},
  {path:'blogone',component:BlogOneComponent,canActivate:[LoginverifyGuard]},
  {path:'blogtwo',component:BlohTwoComponent,canActivate:[LoginverifyGuard]},
  {path:'blogthree',component:BlogThreeComponent,canActivate:[LoginverifyGuard]},
  {path:'filenotFount',component:FilenotfoundComponent},
  {path:'',component:LoginComponent},
  {path:'**',redirectTo:'filenotFount'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
  providers:[LoginverifyGuard]
})
export class AppRoutingModule { }

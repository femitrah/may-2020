import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlohTwoComponent } from './bloh-two/bloh-two.component';
import { BlogThreeComponent } from './blog-three/blog-three.component';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';
import { LoginverifyGuard } from './loginverify.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent,
    BlogOneComponent,
    BlohTwoComponent,
    BlogThreeComponent,
    FilenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [LoginverifyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

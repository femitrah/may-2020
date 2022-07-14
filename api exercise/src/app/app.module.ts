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
import { ForgetComponent } from './forget/forget.component';
import { HttpClientModule}from '@angular/common/http'
import { HttpServiceService } from 'src/httpServise/http-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent,
    BlogOneComponent,
    BlohTwoComponent,
    BlogThreeComponent,
    FilenotfoundComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
    
  ],
  providers: [LoginverifyGuard,HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './headerAndFooter/footer/footer.component';
import { FooterModule } from './headerAndFooter/footer/footer.module';
import { HeaderComponent } from './headerAndFooter/header/header.component';
import { HeaderModule } from './headerAndFooter/header/header.module';
import { TableViewComponent } from './table-view/table-view.component';
import { HomeComponent } from './home/home.component';
import { TableViewModule } from './table-view/table-view.module';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { AddnewuserModule } from './addnewuser/addnewuser.module';
import { HttpserviceService } from './serviceFile/httpservice.service';
import{HttpClientModule}from'@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableViewComponent,
    HomeComponent,
    AddnewuserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    TableViewModule,
    AddnewuserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

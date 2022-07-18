import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }
 public navigatePage(webPageName:string){

  console.log("webPageName",webPageName)

  var orderPage:string='order';
  var completed:string="completed";
  var placed:string='placed';
  var cancelled:string='cancelled';
  var home:string='home';
  var customer:string='customer';

  if(webPageName===orderPage){
    console.log("orderPage",orderPage)
    this.routes.navigate(['/main/order'])
  } else if(webPageName===completed){
    this.routes.navigate(['/main/order/completed'])
  } else if(webPageName===placed){
    this.routes.navigate(['/main/order/placed'])
  } else if(webPageName===cancelled){
    this.routes.navigate(['/main/order/cancelled'])
  } else if(webPageName===home){
    this.routes.navigate(['/main'])
  } else if(webPageName===customer){
    this.routes.navigate(['/main/customer'])
  }

 }

}

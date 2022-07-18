import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:any=""
  userName:any=""
  error:any=""
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public checkLogin(){
    console.log("lhbkhdvbjh")
    if(this.password===""  ||  this.userName===""){
    this.error="input field Should not be empty"
    } else{
      this.router.navigate(["/main"])
    }
  
  }
}

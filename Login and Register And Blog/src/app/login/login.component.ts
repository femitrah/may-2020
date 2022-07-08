import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Password:string="";
  UserName:string="";
  error:string="";
  values:any;
 
  constructor(private router:Router ) { 
   
  }

  public loginChecked(){
   var negativeValues:any=-1;
    var data:any = localStorage.getItem("test")

    var parwewse=JSON.parse(data);

    var positionOne=parwewse.findIndex((values:any)=>values.userName===this.UserName);
    var positionTwo=parwewse.findIndex((values:any)=>values.password===this.Password);


    if(this.Password === "" || this.UserName === "" ){
      this.error="Input Field should not be empty";
    } else if(positionOne === negativeValues && positionTwo === negativeValues){
      this.error="Your Username and password is Wrong"
      this.UserName=""
      this.Password=""
    } else if(positionOne === negativeValues){
      this.error="Your Username is Wrong"
      this.UserName=""
    } else if(positionTwo === negativeValues){
      this.error="Your Password is Wrong"
      this.Password=""
    } else if(positionOne === positionTwo){
       parwewse[positionOne].activeUser=true;
       
       console.log("activeUser",parwewse)
       var addedActiveUser=JSON.stringify(parwewse)
       localStorage.setItem("test",addedActiveUser)

      this.router.navigate(['blog'])
       
      } else{
        this.error="username or password is wrong"
      }
          
    console.log("test1",data);
    console.log("test2",parwewse);

  
    
    console.log("postion",positionOne);
    console.log("userName",this.UserName);
    console.log("postion",positionTwo);
    console.log("userName",this.Password)
   

  }

 

  ngOnInit(): void {
  }

}

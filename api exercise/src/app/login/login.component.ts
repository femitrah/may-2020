
import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  Password:string="";
  UserName:string="";
  error:string="";
  values:any;
  forget:boolean=false;
  constructor(private router:Router ) { 
   
  }
  ngOnInit() {
    console.log("ngOnInit")
  } 
  ngOnDestroy(){
    console.log("ngOnInit")
  }

  
    // ngOnChanges()	{
    // console.log("ngOnChang")
    // }

  public loginChecked(){
   var negativeValues:any=-1;
    var data:any = localStorage.getItem("test")

    var parwewse=JSON.parse(data);
    console.log("parwewse",parwewse)
    if(parwewse===null){
      this.error="Please Register your name and password "
    } else{
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
        this.forget=true
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

   
   

  }

 

 
 

}

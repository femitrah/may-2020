import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/httpServise/http-service.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrayOfObject:any;
  arrayValues:any;
  extractdata:any;
  userInput:string="";
 constructor(private apiValues:HttpServiceService,private router:Router) { 
    
 }
 
 ngOnInit(){
  this.apiValues.getData().then((response)=>{
  var arrayOfObject:any=response
  this.extractdata = arrayOfObject.data
  console.log("data",this.extractdata)
 
  console.log("arrayOfObject",arrayOfObject)

})
}

public selectId(getData:any){
console.log("getData",getData);
this.router.navigate(["/blogone"],{queryParams:{id:getData}})
// this.router.navigate(["/blogone",{id:getData}])
}
 
 public Logout(){

  var getUserDatas:any=localStorage.getItem("test");

  var values:any=JSON.parse(getUserDatas);

  console.log("ConsoleLog",values);
  
  var changeUser=values.map((datas:any)=>{
    if(datas.activeUser===true){
      datas.activeUser=false;
      console.log("datas",datas)
     
    } 
    return datas
  }) 
     console.log("changeUser",changeUser) 
     var addedActiveUser=JSON.stringify(changeUser)
     localStorage.setItem("test",addedActiveUser)  
      this.router.navigate(['login'])
 }

 
  


}

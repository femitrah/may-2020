import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from '../serviceFile/httpservice.service';


@Component({
  selector: 'app-addnewuser',
  templateUrl: './addnewuser.component.html',
  styleUrls: ['./addnewuser.component.css']
})

export class AddnewuserComponent implements OnInit {
  id:number=0;
  firstName:string=""
  lastName:string=""
  email:string=""
  title:any;
  password:string=""
  confirmPassword=""
  role:string=""
  addForm:boolean=true;
  editForm:boolean=false;
  getdata:any
  queryparamId:any;
  array:any;
  returnparams:any;
  postReturn:any
  constructor(private router:Router,private routerparams:ActivatedRoute,private getData:HttpserviceService) { }

  ngOnInit(): void {
   
  this.getdata=this.getData.getApiData()
  this.getdata.subscribe(
  (respones:any)=>{
    console.log("respones",respones)
    this.array=respones
    console.log("1array",this.array)
  },
  (error:any)=>{
    console.log("error",error)
  },
  ()=>{ console.log("getdata to add user")})


  setTimeout(() => {

    this.routerparams.queryParams.subscribe((values:any)=>{ 
      this.queryparamId=values.userId;
     console.log("respones1",this.queryparamId)

    if(this.queryparamId!=undefined ){
      console.log("respones2",this.queryparamId)
     this.addForm=false;
     this.editForm=true;
    
     this.array.forEach((element:any) => {
      
      console.log("values.userId",values.userId)
      if(JSON.stringify(element.id)===values.userId){
        this.id=element.id;
        this.firstName=element.firstName;
        this.lastName=element.lastName;
        this.email=element.email;
        this.title=element.title;
        this.role=element.role;
      
      }})
  
    }
    
    })}, 20);
  



}
public addUser(){

  var emailRegx:any=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passwordRegex:any=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ ;
 var checkedEmailRegx:boolean=emailRegx.test(this.email)
 var checkedpassword:boolean=passwordRegex.test(this.password)
 var checkedPasswordAndConfirmPassword:any=this.password.localeCompare(this.confirmPassword)
 console.log("checkedPasswordAndConfirmPassword",checkedPasswordAndConfirmPassword)
  if(this.firstName==="" || this.lastName==="" || this.email==="" || this.title==="" || this.role==="" ||this.password==="" || this.confirmPassword===""){
    alert("Input field should not be empty")

  }
    else if(checkedEmailRegx!=true){
      alert("Please give the Proper Email id")
   } else if(checkedpassword!=true){
    alert("Password Should be strong Ex:mitrah@55")
   } else if(checkedPasswordAndConfirmPassword===1 || checkedPasswordAndConfirmPassword===-1){
    alert("Password and confirmPassword should be match")
   }
  else{
    console.log("checkvalues",this.title,this.email,this.firstName,this.lastName,this.password,this.confirmPassword,this.role);
    var queryObject:any = {}
    queryObject = {
       firstName:this.firstName, 
       role:this.role,
       lastName:this.lastName,
       email:this.email,
       title:this.title,
       password:this.password,
       confirmPassword:this.confirmPassword}
    this.postReturn=this.getData.postMethods(queryObject);
    this.postReturn.subscribe(
      (response:any)=>{ console.log("response",response)
      alert("Sucessfully registered")
      this.router.navigate(['/tableview'])
    
    },
      (error:any)=>{
        console.log("asasasa",error)
        alert(error.error.message)
    
    },
      ()=>{console.log("completed the postOpration")},

    )
  }
    // this.router.navigate(['/tableview'], {queryParams:{
    //  firstName:this.firstName, 
    //  role:this.role,
    //  lastName:this.lastName,
    //  email:this.email,
    //  title:this.title,
    //  password:this.password,
    //  confirmPassword:this.confirmPassword}})
    
    //  alert("User data is successfully added")
  // }
   
}
public updateUser(){
  let object:any={};
  this.queryparamId;
  object.id=this.id;
  object.firstName=this.firstName;
  object.lastName=this.lastName;
  object.email=this.email;
  object.title=this.title;
  object.role=this.role;
  this.returnparams= this.getData.updataMethods(object,this.id)
  this.returnparams.subscribe(
  (response:any)=>{console.log("updateUserrespones",response)
 if(response.message =="User updated")
 {
  this.id=0;
  this.firstName="";
  this.lastName="";
  this.email="";
  this.title="";
  this.role=""
  alert("Update successfully");
  this.router.navigate(['/tableview'])
   this.ngOnInit()

 }})

}
public clear(){
  this.firstName=""
  this.lastName=""
  this.email=""
  this.title=""
  this.role=""
}
}

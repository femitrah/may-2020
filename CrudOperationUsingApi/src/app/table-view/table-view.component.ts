import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { HttpserviceService } from '../serviceFile/httpservice.service';


@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  editForm:boolean=false;
  arrayOfObject:any;
  array:any; 
  filterData:any;
  id:number=0;
  firstName:string=""
  lastName:string=""
  email:string=""
  title:any;
  arrayLength:any;
  GetLength:boolean=false;
  role:string="";
  postReturn:any;
  trash:any;
  returnparams:any;
  editId:any;
  constructor(private getvalues:HttpserviceService,private getparams:ActivatedRoute ,private router:Router) { }

  ngOnInit() {
    this.arrayOfObject=this.getvalues.getApiData()
    this.arrayOfObject.subscribe(
    (response:any)=>{
      this.array=response
      this.arrayLength=this.array.length
      console.log("Response",  this.array,this.arrayLength)},
     (error:any)=>{console.log("Error",error)},
    ()=>{console.log("Httprequest Is Completed")}
   )
   

   setTimeout(() => {
   
      console.log("res")
       this.getparams.queryParams.subscribe(params=>{
        var queryObject:any={};
        if(params['firstName']!=undefined || params['lastName']!=undefined || params['email']!=undefined || params['title']!=undefined  || params['role']!=undefined  || params['password']!=undefined || params['confirmPassword']!=undefined){
          queryObject.id=this.arrayLength+5;
          queryObject.firstName=params['firstName'];
          queryObject.lastName=params['lastName'];
          queryObject.title=params['title'];
          queryObject.email=params['email']
          queryObject.role=params['role'];
          queryObject.password=params['password'];
          queryObject.confirmPassword=params['confirmPassword']
          console.log("queryparams values",params)
          console.log("queryObject",queryObject )
          this.postReturn=this.getvalues.postMethods(queryObject);
          this.postReturn.subscribe(
            (response:any)=>{ console.log("response",response)},
            (error:any)=>{console.log("getError",error)},
            ()=>{console.log("completed the postOpration")},

          )
        }
       
        })
     
       

   },500);

  }
  
public update(getId:number){
this.router.navigate(['/addnewuser'],{queryParams:{userId:getId}})
  
 
  
}
public Edit(){
  var editObject:any={}
   editObject.id=this.id;
   editObject.firstName=this.firstName;
   editObject.lastName=this.lastName;
   editObject.email=this.email;
   editObject.title=this.title;
   editObject.role=this.role;
   this.returnparams= this.getvalues.updataMethods(editObject,this.editId)
   this.returnparams.subscribe(
   (response:any)=>{console.log("respones",response)
  if(response.message =="User deleted")
  {
    this.ngOnInit()

  }
},
  (error:any)=>{console.log("Edit error",error)},
  ()=>{console.log("successfuly update")})
  
  }


public clear(){
  this.id=0;
  this.firstName="";
  this.lastName="";
  this.email="";
  this.title=""
  this.role=""
}
public delete(getId:any){
  
this.trash=this.getvalues.delete(getId)
this.trash.subscribe(
  (response:any)=>{
    console.log(response)
    if(response.message =="User deleted")
    {
      this.ngOnInit()

    }
 

    
  },
  (error:any)=>{
    console.log("deleteError",error)
  },
  ()=>{console.log("success")}
)
}
}

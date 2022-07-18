import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-placed',
  templateUrl: './placed.component.html',
  styleUrls: ['./placed.component.css']
})
export class PlacedComponent implements OnInit {
  product:string="";
  quantity:any;
  status:string="";
  date:any;
 array:any=[];
 
 
  constructor(private routes:Router) { }

  ngOnInit(): void {
  }
 public order(){
  if(this.product==="" || this.quantity==="" || this.status==="" || this.date===""){
    alert("Input field should not be empty");
  } else{
   var object:any={}
     object.productName=this.product
     object.numberOfQuantity=this.quantity
     object.orderStatus=this.status
     object.orderDate=this.date
     console.log("object",object)
     this.array.push(object)
     var convertString=JSON.stringify(this.array)
     console.log("convertString",convertString)
     localStorage.setItem("orderInfo",convertString)
     this.product=""
     this.quantity=""
     this.status=""
     this.date=""
     alert("order successfuly");
  }
 }

 public placedList(){
this.routes.navigate(['/main/order/placed/placedorderlist'])
 }
}

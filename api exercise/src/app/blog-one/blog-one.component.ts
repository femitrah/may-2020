import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/httpServise/http-service.service';
@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.css']
})
export class BlogOneComponent implements OnInit {
  id:any;
  userDatas:any
  particularObject:any
  constructor(private router:ActivatedRoute,private getDatas:HttpServiceService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(values=>{
    console.log("blogparametervalues",values)
    this.id=values['id']
    console.log("images",this.id)
   
    this.getDatas.getData().then((values)=>{
    this.userDatas=values;
    var particularData:any=this.userDatas.data;
    console.log("userDatas",particularData);
    this.particularObject=particularData.filter((objecs:any)=>{
    if(objecs.id===this.id){
      return objecs
    }
   })
   console.log("particularObject",this.particularObject)
    
    })

    })
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

 imagesArray:any=[];
 obeject:any={}

 constructor(private router:Router) { 

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
 public params(whichImage:string){

  var valueone:string="firstImage";

  var valueTwo:string="secondImage";

  var valueThree:string="thirdImage";

  if(whichImage === valueone){

    this.router.navigate(['/blogone'] ,{queryParams:{images:"./assets/download.jpeg"}}) 

  } else if(whichImage === valueTwo){

    this.router.navigate(['/blogtwo'] ,{queryParams:{images:"./assets/web-3157323__340.webp"}}) 

  } else if(whichImage === valueThree){

    this.router.navigate(['/blogthree'] ,{queryParams:{images:"./assets/photo-1546868871-7041f2a55e12.avif"}}) 

  }
  

 }
  

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-three',
  templateUrl: './blog-three.component.html',
  styleUrls: ['./blog-three.component.css']
})
export class BlogThreeComponent implements OnInit {
image:any;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
  this.router.queryParams.subscribe(values=>{
  console.log("getValues",values);
   this.image=values['images']
  })
  }

}

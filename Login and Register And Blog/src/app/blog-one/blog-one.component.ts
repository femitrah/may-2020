import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.css']
})
export class BlogOneComponent implements OnInit {
  image:any;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(values=>{
    console.log("blogparametervalues",values)
    this.image=values['images']
    console.log("images",this.image)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bloh-two',
  templateUrl: './bloh-two.component.html',
  styleUrls: ['./bloh-two.component.css']
})
export class BlohTwoComponent implements OnInit {
image:any;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(values=>{
    console.log("blogtwo",values);
    this.image=values['images']
    })
  }

}

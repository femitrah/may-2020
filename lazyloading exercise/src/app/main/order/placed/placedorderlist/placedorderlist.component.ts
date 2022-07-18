import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placedorderlist',
  templateUrl: './placedorderlist.component.html',
  styleUrls: ['./placedorderlist.component.css']
})
export class PlacedorderlistComponent implements OnInit {
  convertedparse:any
  constructor() { }

  ngOnInit(): void {
   let getData:any=localStorage.getItem("orderInfo")
   this.convertedparse=JSON.parse(getData)
   console.log(this.convertedparse);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})
export class ThumbComponent implements OnInit {
  //numadd
  likeNum : number=0;
  //num function
  likeAdd (){
    this.likeNum++;
  } 
  hateAdd (){
    this.likeNum--;
  }
  constructor() { }

  ngOnInit() {
  }

}

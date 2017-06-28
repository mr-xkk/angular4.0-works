import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {
  
  showList : string;
  musicId : string;
  //显示歌单
  showPlay : boolean = false;

  //获取子级传的参数
  receive(msg:string){
    this.musicId = msg;
  }

  constructor() { }

  ngOnInit() {
    $.ajax({
      type: 'GET',
      url:'http://localhost:3000/playlist/detail?id=134689510',
      dataType:'json', 
      success:(msg)=>{
          console.log(msg);
          this.showList = msg;
      }
    }) 
  }
  
}

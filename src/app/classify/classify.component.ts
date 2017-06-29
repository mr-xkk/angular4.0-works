import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {
  
  showList : object;
  doName : string;
  //显示歌单
  showPlay : boolean = false;

  //获取子级传的参数
  receive(msg:string){
    this.doName = msg;
  }

  constructor() { }

  ngOnInit() {
    $.ajax({
      type: 'GET',
      url:'https://api.imjad.cn/cloudmusic?type=playlist&id=134689510',
      dataType:'json', 
      success:(msg)=>{
          console.log(msg);
          this.showList = msg;
      }
    }) 
  }
  
}

import { Component, Input,OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {


  @Output() private toOut = new EventEmitter<string>();
  //我的歌单
  myList : string

  constructor() { }

  ngOnInit() {
    //获取数据
     $.ajax({
      type: 'GET',
      url:'http://localhost:3000/playlist/detail?id=134689510',
      dataType:'json', 
      success:(msg)=>{
          console.log(msg);
          this.myList = msg;
      }
    })
  }
  //传参到父级
     sendToP(info){
      this.toOut.emit(info);
    }
}

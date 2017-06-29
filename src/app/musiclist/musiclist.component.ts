import { Component, Input,OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {


  @Output() private toOut = new EventEmitter<string>();

  //我的歌单
  myList : object;
  musicId : string;
  musicUrl : object;

  constructor() { }

  ngOnInit() {
    //获取数据
     $.ajax({
      type: 'GET',
      url:'https://api.imjad.cn/cloudmusic?type=playlist&id=134689510',
      dataType:'json', 
      success:(msg)=>{
          console.log(msg);
          this.myList = msg;
        }
      })
    }
    //传参到父级
      sendToP(info,name){
      this.toOut.emit(name);
      console.log(info);
      console.log(name);
      //获取id播放
      this.musicId = info;
      console.log(this.musicId);
       $.ajax({
        type: 'GET',
        url:'http://musicapi.duapp.com/api.php?type=url&id='+this.musicId,
        dataType:'json', 
        success:(msg)=>{
            console.log(msg);
            this.musicUrl = msg;
        }
      }) 
    }
}

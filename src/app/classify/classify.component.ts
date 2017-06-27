import { Component, OnInit,Inject } from '@angular/core';
//引入解析url的模块
import {ActivatedRoute, Params} from '@angular/router';
import { Http } from '@angular/http';
import { MusiclistComponent } from '../musiclist/musiclist.component'


@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {
  
  showList : string;
  musicId : string;

  constructor(@Inject(ActivatedRoute) public router: ActivatedRoute,private http: Http) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      console.log(params);
    })
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
  //获取子级传的参数
  receive(msg:string){
    this.musicId = msg;
  }
}

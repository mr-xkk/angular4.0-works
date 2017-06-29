import { Component, OnInit,Inject } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Http,URLSearchParams, QueryEncoder } from '@angular/http';
import{ homeData } from '../all_data/homedata';
import 'rxjs/add/operator/map';
//引入jQuery
declare var $:any;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  //获取当前评论时间
  myDate : any = new Date();
  nowYear : string;
  nowMonth : string;
  nowDay : string;
  nowHour : string;
  nowMin: string;

  textval : any;
  showInfo : object;
  getName : string;
  //需要插入的数据
  addInfo : any;
  changeInfo : string[] = [];
  needInfo : string[] = [];

  codedetailURL = "./assets/home_data.json";
  codeDatas: homeData[];

  constructor(@Inject(ActivatedRoute) public router: ActivatedRoute,public http: Http) { }

  ngOnInit() {
   this.router.params.subscribe((params: Params) => {
            // params
             this.http.get(this.codedetailURL)
              .map(res => res.json())
              .subscribe(data => {
                if (data) this.codeDatas = data;
                this.getName = params.name;
                this.showInfo = this.codeDatas[params.infoId]; 
          });
      });
  }
  //获取输入值赋值
  changeVal(val:string){
    this.addInfo = val;
  }
  //获取值插入到页面
  addText(val:string){
    if(this.textval == null){
      alert('请输入留言内容');
      return false;
    }
    //添加时间
    this.nowYear = this.myDate.getFullYear();
    this.nowMonth = this.myDate.getMonth()+1;
    this.nowDay = this.myDate.getDate();
    this.nowHour = this.myDate.getHours();
    this.nowMin = this.myDate.getMinutes();
    //
    this.changeInfo.push(this.addInfo);
    console.log(this.changeInfo)
    this.needInfo = this.changeInfo.reverse();
    //传数据到后台
    $.ajax({
      type: 'GET',
      url:'./assets/home_data.json',
      dataType:'json', 
      data:{
        reviews:this.needInfo
      },
      success:(msg)=>{
        console.log(msg);
      }
    })
    //清空输入框
    this.textval = '';
  } 
}

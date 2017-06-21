import { Component, OnInit } from '@angular/core';
//引用http模块,和map方法
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map'; 
//引入动画模块
import { flyIn } from '../animations/fade_in';

//声明获取数据的类型
interface articleInfo{
  title: string;
  detail: string;
  imgsrc: string;
  info:string
}
//组件
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [
    flyIn
  ]
})
export class BlogComponent implements OnInit {
  
  public articleURL = "./assets/detail_data.json";
  articleInfos : articleInfo[];

  //构造一个http方法
  constructor(private http:Http) { }
 
  ngOnInit() {
    //请求数据
    this.http.get(this.articleURL)
      .map(res => res.json()) 
      .subscribe(data => {
        if (data) this.articleInfos = data;
        console.log(this.articleInfos);
      });
    //控制显示
    let myTim:boolean=false;
    let myWe:boolean=false; 
  }

}

import { Component, OnInit,Inject } from '@angular/core';
//引入解析url的模块
import {ActivatedRoute, Params} from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import{ homeData } from '../all_data/homedata';
import { flyIn } from '../animations/fade_in';

@Component({
  selector: 'app-codedetail',
  templateUrl: './codedetail.component.html',
  styleUrls: ['./codedetail.component.css'],
  animations: [
    flyIn
  ]
})

export class CodedetailComponent implements OnInit {

  showInfo : object;
  getName : string;

  public codedetailURL = "./assets/home_data.json";
  codeDatas: homeData[];
  
  constructor(@Inject(ActivatedRoute) public router: ActivatedRoute,public http: Http) { 
    
  }
  ngOnInit() {
    //获取url地址解析,获取传输的参数
     this.router.params.subscribe((params: Params) => {
            // params
            //打印url传的参数
            console.log(params.infoId); 
            
             this.http.get(this.codedetailURL)
              .map(res => res.json())
              .subscribe(data => {
                if (data) this.codeDatas = data;
                this.getName = params.name;
                this.showInfo = this.codeDatas[params.infoId]; 

                console.log(this.getName);
                console.log(this.showInfo)
          });
      });
      
  }

}

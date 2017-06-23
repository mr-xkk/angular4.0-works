import { Component, OnInit,Inject } from '@angular/core';
//引入解析url的模块
import {ActivatedRoute, Params} from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import{ homeData } from '../all_data/homedata';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css'],
})
export class ClassificationComponent implements OnInit {

  public codedetailURL = "./assets/home_data.json";
  classDatas: homeData[];
  showInfo:string;

  constructor(@Inject(ActivatedRoute) public router: ActivatedRoute,private http: Http) { 
    
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
            // params
            //打印url传的参数
             this.http.get(this.codedetailURL)
              .map(res => res.json())
              .subscribe(data => {
                if (data) this.classDatas = data;
                this.showInfo = params.data;
                //打印得到的参数
                console.log(this.showInfo);
                console.log(this.classDatas);  
          });
      });
  }

}

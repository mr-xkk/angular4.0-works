import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import{ dataServer } from './server/rightserver';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import{ homeData } from '../all_data/homedata';

@Injectable()

@Component({
  selector: 'app-rightdet',
  templateUrl: './rightdet.component.html',
  styleUrls: ['./rightdet.component.css']
})
export class RightdetComponent implements OnInit {
  //获取虚拟的json数据;
  public detailURL = "./assets/home_data.json";
  homeDatas: homeData[];

  constructor(private http: Http) { } 

  ngOnInit() {
    this.http.get(this.detailURL)
      .map(res => res.json()) 
      .subscribe(data => {
        if (data) this.homeDatas = data; 
        console.log(this.homeDatas)
      });
  }
}

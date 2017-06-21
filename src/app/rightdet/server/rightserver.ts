import { Component,OnInit  } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import{ homeData } from '../../all_data/homedata';


export class dataServer implements OnInit {
  homeDatas: homeData[];

  constructor(private http: Http) { } // (3)

  ngOnInit() {
    this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`) // (4)
      .map(res => res.json()) // (5)
      .subscribe(data => {
        if (data) this.homeDatas = data; // (6)
      });
  }
}
import { Component, OnInit } from '@angular/core';
//引入动画模块
import { flyIn } from '../animations/fade_in';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    flyIn
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

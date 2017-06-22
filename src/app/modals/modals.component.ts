import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  like : string;
  title : string;
  addNum : boolean = true;

  changelike(){
    if(this.addNum==true){
      this.like='喜欢成功'
      this.title='再点就不喜欢了'
    }else{
      this.like='不喜欢'
      this.title='再点喜欢'
    }
    this.addNum = !this.addNum;
  }
  constructor() { }

  ngOnInit() {
    
  }

}

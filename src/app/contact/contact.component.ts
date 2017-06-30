import { Component, OnInit } from '@angular/core';
//import animate module
import { fadeIn } from '../animations/animate_show';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    fadeIn
  ]
})
export class ContactComponent implements OnInit {
  myTim : boolean = false;
  myWe : boolean = false;
  eTxt : string;
  alertText : string;
  constructor() { }

  ngOnInit() {
    
  }
  //提交函数
  //表单验证
  sub(){
    console.log(this.eTxt);
    let patten2=new RegExp(/^[0-9|A-z|_]{1,17}[@][0-9|A-z]{1,3}.(com)$/);   
　　if(patten2.test(this.eTxt))     
　　{          
      this.alertText = "输入正确";
　　}   
　　else      
　　{   
      this.alertText = "请输入正确的邮箱地址"; 
      return false;     
　　}
    document.forms[0].submit();
  }
}

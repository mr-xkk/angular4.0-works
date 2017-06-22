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
  myTim:boolean = false;
  myWe:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

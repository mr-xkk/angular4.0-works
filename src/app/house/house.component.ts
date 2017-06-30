import { Component, OnInit,Inject } from '@angular/core';
import{ appRoutes } from '../app.route'

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  constructor() { 
  

  }

  ngOnInit() {
    
  }

  reseach(){
    document.forms[0].submit();
  }

}

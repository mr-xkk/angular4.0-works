import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//bootstrap模块
import { AlertModule } from 'ngx-bootstrap'
//动画模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import {appRoutes} from './app.route';
//轮播图组件bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
//引入模态层组件 
import { ModalModule } from 'ngx-bootstrap';
//加入数据绑定模块
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ClassifyComponent } from './classify/classify.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RightdetComponent } from './rightdet/rightdet.component';
import { CodedetailComponent } from './codedetail/codedetail.component';
import { ClassificationComponent } from './classification/classification.component';
import { ThumbComponent } from './thumb/thumb.component';
import { ModalsComponent } from './modals/modals.component';
import { ReviewComponent } from './review/review.component';
import { MusiclistComponent } from './musiclist/musiclist.component';



@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    ClassifyComponent,
    HomeComponent,
    CarouselComponent,
    RightdetComponent,
    CodedetailComponent,
    ClassificationComponent,
    ThumbComponent,
    ModalsComponent,
    ReviewComponent,
    MusiclistComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

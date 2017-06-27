import 	{ RouterModule } from '@angular/router';

import 	{ HomeComponent } from './home/home.component';
import 	{ BlogComponent } from './blog/blog.component';
import 	{ AboutComponent } from './about/about.component';
import 	{ ContactComponent } from './contact/contact.component';
import	{ CodedetailComponent }from './codedetail/codedetail.component'
import 	{ ClassificationComponent } from './classification/classification.component';
import 	{ MusiclistComponent } from './musiclist/musiclist.component'

export const appRoutes=[
    {
		path:'',
		component:HomeComponent
	},
    {
		path:"blog",
		component:BlogComponent
	},
	{
		path:"about",
		component:AboutComponent
	},
	{
		path:'contact',
		component:ContactComponent
	},
	{
		path:'detail/:infoId/:name',
		component:CodedetailComponent
	},
	{
		path:'classification/:data',
		component:ClassificationComponent
	}
]
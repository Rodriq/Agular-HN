import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CreateNewsComponent } from './create-news/create-news.component';

const routes: Routes = [
{ path: '', component: NewsComponent },
{ path: 'news', component: NewsComponent },
{ path: 'create', component:CreateNewsComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

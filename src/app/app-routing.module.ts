import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
{ path: '', component: NewsComponent },
{ path: 'news', component: NewsComponent },
{ path: 'create', component: CreateNewsComponent},
{ path: 'other', component: OtherComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {  NewsService } from '../news.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	news$: Object;

	constructor(private news: NewsService) { }

	ngOnInit() {
		this.news.getNews().subscribe(
			news => this.news$ = news
			)
	}

}

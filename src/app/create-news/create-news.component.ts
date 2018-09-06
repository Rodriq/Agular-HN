import { Component, OnInit } from '@angular/core';
import { NewsService } from './../news.service';
import {Router} from "@angular/router";

@Component({
	selector: 'app-create-news',
	templateUrl: './create-news.component.html',
	styleUrls: ['./create-news.component.css']
})

export class CreateNewsComponent implements OnInit {

	title: String = "";
	body: String = "";
	url: String = "";
	newNews: Object;
	constructor(private newsService: NewsService, private router: Router) { }

	ngOnInit() {
	}

	savePost () {
		let newNews = {title:this.title, body:this.body, url:this.url}
		//console.log(newNews);
		this.newsService.createNews(newNews)
		.subscribe(i => console.log(i));
		this.router.navigate(['/news']);
	}

}


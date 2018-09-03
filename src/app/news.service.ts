import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { title } from '.create-news/create-news.component';
import { pipe, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class NewsService {
	url = 'http://localhost:8000/api/news/test';
	const httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json'
		});

	}
	constructor(private http: HttpClient) { }

	getNews(){
		return this.http.get('/api/news/')

	}

	createNews(newNews){
		// console.log(newNews);
		// this.http.post('/api/news/test', newNews, this.httpOptions)
		// .subscribe(i => console.log(i))
		// .subscribe((i) => console.log(i))
		return this.http.post<any>('/api/news/create', newNews, this.httpOptions)
		// .pipe(
		// 	tap((res: any) => console.log(res))
		// 	);
	}
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // const url = 'http://localhost:8000/api/news/test';
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  };
  ids: any;
  telll: any;
  constructor(private http: HttpClient) { }
  getNews() {
    return this.http.get('/api/news/');
    }
    createNews(newNews) {
      return this.http.post<any>('/api/news/create', newNews, this.httpOptions);
      }
      getFromHN() {
      const res =  this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
   return(res);
        }
        again(ary) {
    // console.log('man',ary.length)
          const cuted = ary.slice(0, 20);
          const telll = [];
          for (let i = 0; i < cuted.length; i++) {
            this.fetching(cuted[i]).subscribe(ie => {
              //  console.log(ie)
               telll.push(ie);
          });
         }
  this.telll = telll;
 return(this.telll);
          }
      fetching(id) {
        // return(id);
        const real = (this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
        console.log(real);
        return(real);
      }
    }

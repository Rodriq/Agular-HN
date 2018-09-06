import { Component, OnInit } from '@angular/core';
import {  NewsService } from '../news.service';
import { Observable } from 'rxjs';

@Component({
selector: 'app-other',
templateUrl: './other.component.html',
styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

arrayedNews$: Object;
realnews: String;
gotten$: Object;
    mkkm: any;
    hh: any;
    ti: any;

constructor(private arrayedNews: NewsService) { }

ngOnInit() {
this.arrayedNews.getFromHN().subscribe(
arrayedNews => {
this.arrayedNews$ = arrayedNews;
// console.log(this.arrayedNews$);
const jarr = 234;
const mkkm = this.arrayedNews.again(this.arrayedNews$);
// mkkm.subscribe(i => {
//     //  console.log(i);
//      this.gotten$ = i;
//     } );
// console.log('====', ti);
console.log(mkkm);
this.gotten$ = mkkm;
console.log(typeof(this.gotten$));
},
// this.mkkm.subscribe(i => { console.log(i); } )
);

}
}

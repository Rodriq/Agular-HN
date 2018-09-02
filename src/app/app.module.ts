import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { BarComponent } from './bar/bar.component';
import { CreateNewsComponent } from './create-news/create-news.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  AppComponent,
  NewsComponent,
  BarComponent,
  CreateNewsComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

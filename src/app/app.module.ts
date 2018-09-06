import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { BarComponent } from './bar/bar.component';
import { CreateNewsComponent } from './create-news/create-news.component';

import { HttpClientModule } from '@angular/common/http';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
  AppComponent,
  NewsComponent,
  BarComponent,
  CreateNewsComponent,
  OtherComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

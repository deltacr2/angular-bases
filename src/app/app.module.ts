import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
//import { CommonModule } from '@angular/common';

//orden de imports
//1-Las de JavaScript
//2-angular oficial
//3-librerias de terceros
//4-las propias


@NgModule({
  declarations: [
    AppComponent,
//    HeroComponent,
//    ListComponent
  ],
  imports: [
    BrowserModule,
//    CommonModule,

    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

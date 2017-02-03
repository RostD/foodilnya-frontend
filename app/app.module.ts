import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouter } from './router.module';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";

import { PopoverModule } from 'ng2-bootstrap';
import { RatingModule } from 'ng2-bootstrap';

import { AppComponent }  from './app.component';
import { DishlistComponent } from './components/dishlist.component'
import { HomeComponent } from './components/home.component'
import {LoginComponent} from "./components/login.component";
import {AuthUserService} from "./services/authuser.service";
import {NavigationComponent} from "./components/navigation.component";
import {DishesService} from "./services/dishes.service";


import {FilterPipe} from "./pipes/filter.pipe";



@NgModule({
  imports:      [
    BrowserModule,
    AppRouter,
    HttpModule,
    FormsModule,
    PopoverModule.forRoot(),
    RatingModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    DishlistComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    FilterPipe,

  ],
  providers:[
    AuthUserService,
    DishesService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

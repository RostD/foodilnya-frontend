import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouter } from './router.module';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";

import {PopoverModule, SortableModule, ModalModule} from 'ng2-bootstrap';
import { RatingModule } from 'ng2-bootstrap';

import { AppComponent }  from './app.component';
import { DishlistComponent } from './components/dishlist.component'
import { HomeComponent } from './components/home.component'
import {LoginComponent} from "./components/login.component";
import {AuthUserService} from "./services/authuser.service";
import {NavigationComponent} from "./components/navigation.component";
import {DishesService} from "./services/dishes.service";
import {FilterNamePipe} from "./pipes/filterName.pipe";
import {FilterTagsANDPipe} from "./pipes/filterTagsAND.pipe";
import {TagsService} from "./services/tags.service";
import {FilterTagsORPipe} from "./pipes/filterTagsOR";



@NgModule({
  imports:      [
    BrowserModule,
    AppRouter,
    HttpModule,
    FormsModule,
    PopoverModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    DishlistComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    FilterNamePipe,
    FilterTagsANDPipe,
    FilterTagsORPipe,

  ],
  providers:[
    AuthUserService,
    DishesService,
    TagsService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

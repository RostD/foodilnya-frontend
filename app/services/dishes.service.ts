import { Injectable, Inject} from '@angular/core';
import {Dish} from "../classes/dish";
import {Http, Response} from "@angular/http";
import {API_HOST} from "../cfg";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class DishesService{

  constructor(@Inject(Http) private http: Http){}

  getDishes(): Observable <Dish[]> {
    return this.http.get(API_HOST+'/dishes').map(this.revealDishes);
  }

  revealDishes(res: Response){
    let body = res.json();
    return body.data||[];

  }
}

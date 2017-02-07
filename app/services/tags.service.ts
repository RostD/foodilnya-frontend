

import {Injectable, Inject} from "@angular/core";
import {Http, Response} from "@angular/http";
import {API_HOST} from "../cfg";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Tag} from "../classes/tag";


@Injectable()
export class TagsService
{
  constructor(@Inject(Http) private http: Http)
  {
  }
  usedDish()
  {
    return this.http.get(API_HOST+'/usedTags/dish');
  }

  revealData(res: Response){
    let body = res.json();
    return body.data||[];

  }
}

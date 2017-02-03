import {Pipe, Injectable, PipeTransform} from "@angular/core";
import {Dish} from "../classes/dish";
@Pipe({
  name:'filter',
  pure: false,
})

@Injectable()
export class FilterPipe implements PipeTransform{
  transform(items: any[], args: any): any {
    if(args === null) return items

    return items.filter(item =>
      item.name.toLowerCase().includes(args.toLowerCase()));
  }

}

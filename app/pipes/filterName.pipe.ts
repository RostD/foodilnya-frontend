import {Pipe, Injectable, PipeTransform} from "@angular/core";

@Pipe({
  name:'filterName',
  pure: false,
})

@Injectable()
export class FilterNamePipe implements PipeTransform{
  transform(items: any[], name: any): any {
    if(!name) return items;

    return items.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase());
      }
    );
  }

}

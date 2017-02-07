///<reference path="../../node_modules/protractor/built/config.d.ts"/>
import {Pipe, Injectable, PipeTransform} from "@angular/core";

@Pipe({
  name:'tagsOR',
  pure: false,
})

@Injectable()
export class FilterTagsORPipe implements PipeTransform{
  transform(items: any[], tags: any[]): any {
    if(tags.length == 0) return items;

    return items.filter(item => {
        var match: boolean = false;
        tags.forEach(function (tag_s) {
          item.tags.forEach(function (tag_in:any) {
            if(tag_in.id == tag_s.id)
            {
              match = true;
              return;
            }

          })
        })

        if(match)
          return true;
        return false;
      }
    );
  }

}

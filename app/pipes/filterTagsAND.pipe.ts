///<reference path="../../node_modules/protractor/built/config.d.ts"/>
import {Pipe, Injectable, PipeTransform} from "@angular/core";

@Pipe({
  name:'tagsAND',
  pure: false,
})

@Injectable()
export class FilterTagsANDPipe implements PipeTransform{
  transform(items: any[], tags: any[]): any {
    if(tags.length == 0) return items;

    return items.filter(item => {
        var matches = 0;

        tags.forEach(function (tag_s) {
          item.tags.forEach(function (tag_in:any) {
            if(tag_in.id == tag_s.id)
              matches++;
          })
        })

        if(matches == tags.length)
          return true;
        return false;
      }
    );
  }

}

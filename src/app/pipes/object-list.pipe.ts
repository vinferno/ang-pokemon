import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'objectList'
})
export class ObjectListPipe implements PipeTransform {

  transform(value:any, ...args: unknown[]): Observable<any> {
    return value.pipe(
      map( (res: any) => Object.keys(res).map( key => ({key:key, value: res[key]} )) )
      );
  }

}

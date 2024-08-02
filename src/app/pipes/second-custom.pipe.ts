import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondCustom'
})
export class SecondCustomPipe implements PipeTransform {

  transform(value: string, limit: number | string): string {
    if (typeof limit === 'string') {
      if (value.length > Number(limit)) {
          return `${value.substring(0, Number(limit))}...`;
        }

    }
    else if (typeof limit === 'number') {
      if (value.length > limit) {
        return `${value.substring(0, limit)}...`;
      }
    }
    return value
  }
}

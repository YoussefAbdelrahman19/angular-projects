import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
  pure: false
})
export class SlicePipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string[] {
    let res: string[] = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i].startsWith("a")) {
        res.push(value[i])
      }
    }
    return res;
  }
}

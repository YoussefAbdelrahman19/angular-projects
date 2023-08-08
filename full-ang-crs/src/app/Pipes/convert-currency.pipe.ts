import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCurrency'
})
export class ConvertCurrencyPipe implements PipeTransform {

  transform(value: number,rate:number): number {
    return value /rate;
  }

}

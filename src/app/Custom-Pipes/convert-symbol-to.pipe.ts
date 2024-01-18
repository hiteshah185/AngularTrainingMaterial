import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSymbolTo',
  standalone: true
})
export class ConvertSymbolToPipe implements PipeTransform {

  transform(value: string, symbolA: string, symbolB: string): string {
    if (!value) {
      return '';
    }
    return value.replace(symbolA, symbolB);
  }

}

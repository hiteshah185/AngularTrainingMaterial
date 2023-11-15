import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(pipeData:any[], pipeModifier:string, property:string[]): any {
    return pipeData.filter(item =>{
      return (
        item[`${property[0]}`].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        item[`${property[1]}`].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(pipeData: any[], pipeModifier: string): any {

    if (!pipeData) { return null; }
    if (!pipeModifier) { return pipeData; }
    pipeModifier = pipeModifier.toLowerCase();
    //debugger;
    return pipeData.filter(function (item) {
      return JSON.stringify(item)
        .toLowerCase().includes(pipeModifier);
    })



    // if (!pipeModifier) {
    //   return pipeData;
    // }
    // return pipeData.filter((item) => {
    //   return item.firstName.toLowerCase().match(pipeModifier.toLowerCase());
    // })




    // const regExp = new RegExp(pipeModifier, 'i');
    // const properties = Object.keys(pipeData[0]);
    // console.log(properties);
    // return [
    //   ...pipeData.filter((item) => {
    //     return properties.some((property) => regExp.test(item[`${property}`]));
    //   }),
    // ];


    // return pipeData.filter(item => {
    //   return (
    //     item[`${property[0]}`].toLowerCase().includes(pipeModifier.toLowerCase()) ||
    //     item[`${property[1]}`].toLowerCase().includes(pipeModifier.toLowerCase())
    //   )
    // });
  }

}

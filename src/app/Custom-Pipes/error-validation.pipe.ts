import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorValidation'
})
export class ErrorValidationPipe implements PipeTransform {

  transform(value: any, errorObj: Object): unknown {
    // if (typeof Object.keys(errorObj[0]) == 'string' && errorObj != null) {
    //   return value[Object.keys(errorObj[0])];
    // }
    return value;
  }

}

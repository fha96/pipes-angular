import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  /* you can add this property below but it would cost a lot of your app performance.
   because you will force pipe to trace every updates or changes on the data
  */
  // pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    console.log(filterString);

    if (value.length === 0 || filterString === '') {
      return value;
    }
    const filteredArray = [];

    for (let server of value) {
      console.log(server);
      if (server[propName] === filterString) {
        filteredArray.push(server);
      }
    }
    return filteredArray;
  }
}

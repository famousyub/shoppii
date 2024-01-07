import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterprod'
})
export class SearchFilterprodPipe implements PipeTransform {

  transform(
    value: { name: string, id: string }[],
    search: string
  ): { name: string, id: string }[] {
    if (value) {
      const regexp = new RegExp(search, 'i');
      const properties = Object.keys(value[0]);
      return [
        ...value.filter((item) => {
          return properties.some((property) => regexp.test(item[property]));
        }),
      ];
    }
  }

}

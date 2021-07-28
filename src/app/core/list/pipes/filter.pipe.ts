import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterTaskPipe implements PipeTransform {
  transform(items: any[], searchString: string, context: string): any {
      if (searchString === "") {
        return items;
      }

      if (context === 'task') {
        return items.filter((item) => item.name.toUpperCase().includes(searchString.toString().toUpperCase()));
      }

      if (context === 'user' || items != null) {
        return items.filter((item) => {
          const itemName: string = item.name + " " + item.surname;
          return itemName.toUpperCase().includes(searchString.toString().toUpperCase());
      });
    }
  }
}

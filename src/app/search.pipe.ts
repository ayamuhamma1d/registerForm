import { Products } from './products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Products[],term:string): Products[] {
    return value.filter((product) => product.title.toLowerCase().includes(term.toLowerCase()));
  }

}

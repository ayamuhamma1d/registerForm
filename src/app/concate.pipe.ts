import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concate'
})
export class ConcatePipe implements PipeTransform {

  transform(value: number,KeyWord:string): string {
    return KeyWord +value;
  }

}

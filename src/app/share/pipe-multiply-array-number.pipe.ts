import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipeMultiplyArrayNumber',
})

export class PipeMultiplyArrayNumberPipe implements PipeTransform {

  transform(value: Array<number>): any {
    return value.map(value1 => value1 * 2);
  }

}

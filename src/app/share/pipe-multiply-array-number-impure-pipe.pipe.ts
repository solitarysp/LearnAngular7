import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipeMultiplyArrayNumberImpurePipe',
  pure: false
})
export class PipeMultiplyArrayNumberImpurePipePipe implements PipeTransform {

  transform(value: Array<number>): any {
    return value.map(value1 => value1 * 2);
  }

}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipeMultiply'
})
export class PipeMultiplyPipe  {

  transform(value: number, args?: PipeMultiplyObject): number {
    return value * (args ? args.value : 1);
  }

}

export class PipeMultiplyObject {
  value: number;
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipex2'
})
export class Pipex2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

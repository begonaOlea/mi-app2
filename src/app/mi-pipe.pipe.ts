import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return '**' +  value + "**";
  }

}

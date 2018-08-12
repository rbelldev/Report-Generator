import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'killed'
})
export class KilledPipe implements PipeTransform {

  transform(killed: boolean): any {
    return killed ? "Kill" : "Wipe";
  }

}

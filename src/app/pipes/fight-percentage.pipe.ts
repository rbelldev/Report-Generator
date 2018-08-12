import { Pipe, PipeTransform } from '@angular/core';
import {Fight} from '../models/Fight';

@Pipe({
  name: 'fightPercentage'
})
export class FightPercentagePipe implements PipeTransform {

  transform(fight: Fight): string {

    return `${(fight.FightPercentage / 100)}%`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import {Fight} from '../models/Fight';

@Pipe({
  name: 'fightDuration'
})
export class FightDurationPipe implements PipeTransform {

  transform(fight: Fight): any {
    let fightDurationInMilliSeconds = (fight.EndTime - fight.StartTime);
    let durationInSeconds = (fightDurationInMilliSeconds / 1000);

    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = (durationInSeconds % 60).toFixed(0);

    return `${minutes}:${seconds}`
  }

}

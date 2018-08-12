import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficulty'
})
export class DifficultyPipe implements PipeTransform {

  transform(difficulty: number): any {
    switch (difficulty) {
      case 5: return "Mythic";

      case 4: return "Heroic";

      case 3: return "Normal";

      case 2: return "LFR";

      default: return difficulty;
    }
  }

}

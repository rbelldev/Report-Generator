import {DeathReport} from '../../../models/reports/DeathReport';
import {Fight} from '../../../models/Fight';

export class DeathAnalyzer {
  public static analyzeDeaths(Report: DeathReport, deathData: object) {
    Report.Fights.forEach((fight: Fight) => {
      this.getDeathsForFight(Report, fight, deathData);
    });
  }

  public static getDeathsForFight(Report: DeathReport, Fight: Fight, deathData: object) {
    deathData['entries'].forEach(death => {
      if(death['fight'] == Fight.ID){
        let characterName = death['name'];
        if(Fight.Deaths[characterName]) {
          Fight.Deaths[characterName]['count']++
        } else {
          if(!Report.AllCharacterNamesWithDeaths.includes(characterName)){
            Report.AllCharacterNamesWithDeaths.push(characterName);
          }
          Fight.Deaths[characterName] = {'count': 1}
        }
      }
    })
  }
}

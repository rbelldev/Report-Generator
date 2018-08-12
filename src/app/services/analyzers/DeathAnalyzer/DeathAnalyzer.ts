import {Fight} from '../../../models/Fight';
import {FullReport} from '../../../models/reports/FullReport';

export class DeathAnalyzer {
  public static analyzeDeaths(FullReport: FullReport, deathData: object) {
    FullReport.BaseReport.Fights.forEach((fight: Fight) => {
      this.getDeathsForFight(FullReport, fight, deathData);
    });
  }

  public static getDeathsForFight(FullReport: FullReport, Fight: Fight, deathData: object) {
    deathData['entries'].forEach(death => {
      if(death['fight'] == Fight.ID){
        let characterName = death['name'];
        if(Fight.Deaths[characterName]) {
          Fight.Deaths[characterName]['count']++
        } else {
          if(!FullReport.DeathReport.AllCharacterNamesWithDeaths.includes(characterName)){
            FullReport.DeathReport.AllCharacterNamesWithDeaths.push(characterName);
          }
          Fight.Deaths[characterName] = {'count': 1}
        }
      }
    })
  }
}

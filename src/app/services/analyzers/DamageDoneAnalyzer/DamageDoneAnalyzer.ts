import {DamageDoneEntry} from '../../../models/DamageDoneEntry';
import {FullReport} from '../../../models/reports/FullReport';

export class DamageDoneAnalyzer {
  public static analyzeDamageDone(FullReport: FullReport, damageDoneData: object, fightIndex) {
      damageDoneData['entries'].forEach(damageDoneEntry => {
        let characterName = damageDoneEntry['name'];
        FullReport.BaseReport.Fights[fightIndex].DamageDone[characterName] = new DamageDoneEntry(damageDoneEntry);

        if(!FullReport.DamageDoneReport.AllCharacterNamesWithDamageDone.includes(characterName)){
          FullReport.DamageDoneReport.AllCharacterNamesWithDamageDone.push(characterName);
        }

      })
  }
}

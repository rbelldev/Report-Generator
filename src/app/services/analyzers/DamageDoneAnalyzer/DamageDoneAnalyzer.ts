import {DamageDoneReport} from '../../../models/reports/DamageDoneReport';
import {DamageDoneEntry} from '../../../models/DamageDoneEntry';

export class DamageDoneAnalyzer {
  public static analyzeDamageDone(damageDoneReport: DamageDoneReport, damageDoneData: object, fightIndex) {
      damageDoneData['entries'].forEach(damageDoneEntry => {
        let characterName = damageDoneEntry['name'];
        damageDoneReport.BaseReport.Fights[fightIndex].DamageDone[characterName] = new DamageDoneEntry(damageDoneEntry);

        if(!damageDoneReport.AllCharacterNamesWithDamageDone.includes(characterName)){
          damageDoneReport.AllCharacterNamesWithDamageDone.push(characterName);
        }

      })
  }
}

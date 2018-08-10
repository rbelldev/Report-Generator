import {BaseReport} from './BaseReport';

export class DamageDoneReport {

  public DamageDone: object = {};
  public AllCharacterNamesWithDamageDone: string[] = [];

  constructor(public BaseReport: BaseReport){}

  getCharacterDamageForFight(characterName, fight){
    if(fight.DamageDone[characterName]){
      return fight.DamageDone[characterName].TotalDamage
    }

    return "0"
  }

  getTotalDamageForCharacter(characterName){
    let totalDamage = 0;
    this.BaseReport.Fights.forEach(fight => {
      if(fight.DamageDone[characterName]){
        totalDamage += fight.DamageDone[characterName].TotalDamage
      }
    });

    return totalDamage
  }
}

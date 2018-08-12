import {BaseReport} from './BaseReport';

export class DamageDoneReport {
  get AllCharacterNamesWithDamageDone(): string[] {
    return this._AllCharacterNamesWithDamageDone.sort();
  }

  public DamageDone: object = {};
  private _AllCharacterNamesWithDamageDone: string[] = [];

  constructor(private BaseReport: BaseReport){}

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

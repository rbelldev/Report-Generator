import {Fight} from '../Fight';
import {BaseReport} from './BaseReport';

export class DeathReport {
  get AllCharacterNamesWithDeaths(): string[] {
    return this._AllCharacterNamesWithDeaths.sort();
  }
  private _AllCharacterNamesWithDeaths: string[] = [];

  constructor(private BaseReport: BaseReport) {}

  public getCharacterDeathCountForFightId(characterName, fightId) {
    let fight: Fight = this.BaseReport.Fights.find( fight => fight.ID == fightId);
    let characterDeaths = fight.Deaths[characterName];
    return characterDeaths ? characterDeaths.count : 0;
  }

  public getTotalCharacterDeathCount(characterName): number{
    let deathCount = 0;
    this.BaseReport.Fights.forEach(fight => {
      if(fight.Deaths[characterName]){
        deathCount += fight.Deaths[characterName].count;
      }
    });
    return deathCount
  };

  public getAllCharacterNamesWithDeaths(searchParams) {
    if(searchParams.length > 0){
      return this._AllCharacterNamesWithDeaths.filter(name => {name.includes(searchParams)})
    } else {
      return this._AllCharacterNamesWithDeaths;
    }
  }
}

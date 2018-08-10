import {Fight} from '../Fight';
import {IBaseReport} from './IBaseReport';

export class DeathReport implements IBaseReport {
  Fights: Fight[] = [];
  GlobalEndTime: number;
  GlobalStartTime: number;
  RelativeEndTime: number;
  RelativeStartTime: number;
  Title: string;
  ZoneCode: number;

  public AllCharacterNamesWithDeaths: string[] = [];

  constructor(public ReportId) {}

  public getCharacterDeathCountForFightId(characterName, fightId) {
    let fight: Fight = this.Fights.find( fight => fight.ID == fightId);
    let characterDeaths = fight.Deaths[characterName];
    return characterDeaths ? characterDeaths.count : 0;
  }

  public getTotalCharacterDeathCount(characterName): number{
    let deathCount = 0;
    this.Fights.forEach(fight => {
      if(fight.Deaths[characterName]){
        deathCount += fight.Deaths[characterName].count;
      }
    });
    return deathCount
  }


}

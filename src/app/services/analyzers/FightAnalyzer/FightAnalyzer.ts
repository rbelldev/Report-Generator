import {Fight} from '../../../models/Fight';
import {BaseReport} from '../../../models/reports/BaseReport';

export class FightAnalyzer {

  public static analyzeFights(Report: BaseReport, allFightsData: object) {

    Report.GlobalStartTime = allFightsData['start'];
    Report.GlobalEndTime = allFightsData['start'];

    Report.Title = allFightsData['title'];
    Report.ZoneCode = allFightsData['zone'];

    this.getRelativeStartAndEndTime(Report, allFightsData);

    this.getFights(Report, allFightsData);
  }

  private static getFights(Report: BaseReport, allFightsData: object) {
    allFightsData['fights'].forEach(fightData => {
      if(fightData.boss != 0){
        Report.Fights.push(new Fight(fightData));
      }
    });
  }

  private static getRelativeStartAndEndTime(Report: BaseReport, allFightsData: object) {
    let fights = allFightsData['fights'];

    const firstFight = fights[0];

    const lastIndex = (fights.length - 1);
    const lastFight = fights[lastIndex];

    Report.RelativeStartTime = firstFight['start_time'];
    Report.RelativeEndTime = lastFight['end_time'];
  }
}

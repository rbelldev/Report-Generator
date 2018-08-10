import {Fight} from '../../../models/Fight';
import {IBaseReport} from '../../../models/reports/IBaseReport';

export class FightAnalyzer {

  public static analyzeFights(Report: IBaseReport, allFightsData: object) {

    Report.GlobalStartTime = allFightsData['start'];
    Report.GlobalEndTime = allFightsData['start'];

    Report.Title = allFightsData['title'];
    Report.ZoneCode = allFightsData['zone'];

    this.getRelativeStartAndEndTime(Report, allFightsData);

    this.getFights(Report, allFightsData);
  }

  private static getFights(Report: IBaseReport, allFightsData: object) {
    allFightsData['fights'].forEach(fightData => {
      Report.Fights.push(new Fight(fightData));
    });
  }

  private static getRelativeStartAndEndTime(Report: IBaseReport, allFightsData: object) {
    let fights = allFightsData['fights'];

    const firstFight = fights[0];

    const lastIndex = (fights.length - 1);
    const lastFight = fights[lastIndex];

    Report.RelativeStartTime = firstFight['start_time'];
    Report.RelativeEndTime = lastFight['end_time'];
  }
}

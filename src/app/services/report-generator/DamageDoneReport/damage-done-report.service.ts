import {Injectable} from '@angular/core';
import {WarcraftLogsService} from '../../warcraft-logs/warcraft-logs.service';
import {DamageDoneReport} from '../../../models/reports/DamageDoneReport';
import {DamageDoneAnalyzer} from '../../analyzers/DamageDoneAnalyzer/DamageDoneAnalyzer';
import {IReportService} from '../IReportService';
import {FullReport} from '../../../models/reports/FullReport';

@Injectable({
  providedIn: 'root'
})
export class DamageDoneReportService implements IReportService {

  constructor(private WarcraftLogsService: WarcraftLogsService) {
    this.getMoreDamageDoneDataOrResolve = this.getMoreDamageDoneDataOrResolve.bind(this);
  }

  getReport(FullReport: FullReport): Promise<null> {
    return this.getTotalDamageReport(FullReport)
  }

  private getTotalDamageReport(FullReport: FullReport): Promise<null> {
    FullReport.DamageDoneReport = new DamageDoneReport(FullReport.BaseReport);
    return new Promise((resolve) => {

      let damageDoneCollectionPromise = new Promise(deathCollectionResolution => {
        this.getDamageDoneData(FullReport, deathCollectionResolution, 0, this.getMoreDamageDoneDataOrResolve);
      });

      damageDoneCollectionPromise.then(() => {
        resolve();
      });
    });
  }

  private getDamageDoneData(FullReport: FullReport, resolve, fightIndex, callback) {
    let currentFight = FullReport.BaseReport.Fights[fightIndex];

    this.WarcraftLogsService.getTotalDamage(FullReport.RaidLogId, currentFight.StartTime, currentFight.EndTime).subscribe(damageDoneResults => {
      DamageDoneAnalyzer.analyzeDamageDone(FullReport, damageDoneResults, fightIndex);
      callback(FullReport, resolve, fightIndex);
    });
  }

  private getMoreDamageDoneDataOrResolve(FullReport: FullReport, resolve, fightIndex) {
    fightIndex++;
    if (fightIndex >= FullReport.BaseReport.Fights.length) {
      resolve();
    } else {

      this.getDamageDoneData(FullReport, resolve, fightIndex, this.getMoreDamageDoneDataOrResolve);
    }
  }

}

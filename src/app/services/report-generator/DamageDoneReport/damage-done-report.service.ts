import {Injectable} from '@angular/core';
import {WarcraftLogsService} from '../../warcraft-logs/warcraft-logs.service';
import {BaseReport} from '../../../models/reports/BaseReport';
import {DamageDoneReport} from '../../../models/reports/DamageDoneReport';
import {DamageDoneAnalyzer} from '../../analyzers/DamageDoneAnalyzer/DamageDoneAnalyzer';

@Injectable({
  providedIn: 'root'
})
export class DamageDoneReportService {

  constructor(private WarcraftLogsService: WarcraftLogsService) {
    this.getMoreDamageDoneDataOrResolve = this.getMoreDamageDoneDataOrResolve.bind(this);
  }

  getTotalDamageReport(baseReport: BaseReport): Promise<DamageDoneReport> {
    let totalDamageReport = new DamageDoneReport(baseReport);
    return new Promise((resolve) => {

      let damageDoneCollectionPromise = new Promise(deathCollectionResolution => {
        this.getDamageDoneData(totalDamageReport, deathCollectionResolution, 0, this.getMoreDamageDoneDataOrResolve);
      });

      damageDoneCollectionPromise.then(() => {
        resolve(totalDamageReport);
      });
    });
  }

  getDamageDoneData(damageDoneReport: DamageDoneReport, resolve, fightIndex, callback) {
    let currentFight = damageDoneReport.BaseReport.Fights[fightIndex];

    this.WarcraftLogsService.getTotalDamage(damageDoneReport.BaseReport.ReportId, currentFight.StartTime, currentFight.EndTime).subscribe(damageDoneResults => {
      DamageDoneAnalyzer.analyzeDamageDone(damageDoneReport, damageDoneResults, fightIndex);
      callback(damageDoneReport, resolve, damageDoneResults, fightIndex);
    });
  }

  getMoreDamageDoneDataOrResolve(damageDoneReport: DamageDoneReport, resolve, damageDoneResults, fightIndex) {
    fightIndex++;
    if (fightIndex >= damageDoneReport.BaseReport.Fights.length) {
      this.finalize(damageDoneReport, resolve);
    } else {

      this.getDamageDoneData(damageDoneReport, resolve, fightIndex, this.getMoreDamageDoneDataOrResolve);
    }
  }

  private finalize(damageDoneReport: DamageDoneReport, resolve) {
    resolve(damageDoneReport);
  }

}

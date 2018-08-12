import {Injectable} from '@angular/core';
import {DeathReport} from '../../../models/reports/DeathReport';
import {DeathAnalyzer} from '../../analyzers/DeathAnalyzer/DeathAnalyzer';
import {WarcraftLogsService} from '../../warcraft-logs/warcraft-logs.service';
import {IReportService} from '../IReportService';
import {FullReport} from '../../../models/reports/FullReport';

@Injectable({
  providedIn: 'root'
})
export class DeathReportService implements IReportService {

  constructor(private WarcraftLogsService: WarcraftLogsService) {
    this.getMoreDeathsOrResolve = this.getMoreDeathsOrResolve.bind(this);
  }

  getReport(FullReport: FullReport): Promise<null> {
    return this.getDeathReport(FullReport);
  }

  private getDeathReport(FullReport: FullReport): Promise<null> {
    FullReport.DeathReport = new DeathReport(FullReport.BaseReport);
    return new Promise((resolve) => {

      let deathCollectionPromise = new Promise(deathCollectionResolution => {
        this.getDeathData(FullReport, FullReport.BaseReport.RelativeStartTime, deathCollectionResolution, this.getMoreDeathsOrResolve);
      });

      deathCollectionPromise.then(() => {
        resolve();
      });
    });
  }

  private getDeathData(FullReport: FullReport, startTime, resolve, callback) {
    this.WarcraftLogsService.getDeaths(FullReport.RaidLogId, startTime, FullReport.BaseReport.RelativeEndTime).subscribe(deathResults => {
      DeathAnalyzer.analyzeDeaths(FullReport.DeathReport, deathResults);
      callback(FullReport, resolve, deathResults);
    });
  }

  private getMoreDeathsOrResolve(FullReport: FullReport, resolve, deathResults) {
    if (deathResults.entries.length < 200) {
      resolve();
    } else {
      this.getDeathData(FullReport, deathResults.entries[199]['timestamp'], resolve, this.getMoreDeathsOrResolve);
    }
  }

}

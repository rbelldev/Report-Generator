import {Injectable} from '@angular/core';
import {DeathReport} from '../../../models/reports/DeathReport';
import {DeathAnalyzer} from '../../analyzers/DeathAnalyzer/DeathAnalyzer';
import {WarcraftLogsService} from '../../warcraft-logs/warcraft-logs.service';
import {BaseReport} from '../../../models/reports/BaseReport';

@Injectable({
  providedIn: 'root'
})
export class DeathReportService {

  constructor(private WarcraftLogsService: WarcraftLogsService) {
    this.getMoreDeathsOrResolve = this.getMoreDeathsOrResolve.bind(this);
  }

  getDeathReport(baseReport: BaseReport): Promise<DeathReport> {
    let deathReport = new DeathReport(baseReport);
    return new Promise((resolve) => {

      let deathCollectionPromise = new Promise(deathCollectionResolution => {
        this.getDeathData(deathReport, deathReport.BaseReport.RelativeStartTime, deathCollectionResolution, this.getMoreDeathsOrResolve);
      });

      deathCollectionPromise.then(() => {
        resolve(deathReport);
      });
    });
  }

  getDeathData(deathReport: DeathReport, startTime, resolve, callback) {
    this.WarcraftLogsService.getDeaths(deathReport.BaseReport.ReportId, startTime, deathReport.BaseReport.RelativeEndTime).subscribe(deathResults => {
      DeathAnalyzer.analyzeDeaths(deathReport, deathResults);
      callback(deathReport, resolve, deathResults);
    });
  }

  getMoreDeathsOrResolve(deathReport: DeathReport, resolve, deathResults) {
    if (deathResults.entries.length < 200) {
      this.finalize(deathReport, resolve);
    } else {
      this.getDeathData(deathReport, deathResults.entries[199]['timestamp'], resolve, this.getMoreDeathsOrResolve);
    }
  }

  private finalize(deathReport: DeathReport, resolve) {
    resolve(deathReport);
  }
}

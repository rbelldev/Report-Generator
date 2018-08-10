import { Injectable } from '@angular/core';
import {DeathReport} from '../../../models/reports/DeathReport';
import {DeathAnalyzer} from '../../analyzers/DeathAnalyzer/DeathAnalyzer';
import {WarcraftLogsService} from '../../warcraft-logs/warcraft-logs.service';
import {FightAnalyzer} from '../../analyzers/FightAnalyzer/FightAnalyzer';

@Injectable({
  providedIn: 'root'
})
export class DeathReportService {

  constructor(private WarcraftLogsService: WarcraftLogsService) {
    this.getMoreDeathsOrResolve = this.getMoreDeathsOrResolve.bind(this);
  }

  getDeathReport(report: DeathReport): Promise<any> {
    return new Promise((resolve) => {
      this.WarcraftLogsService.getFights(report.ReportId).subscribe(fightResults => {
        FightAnalyzer.analyzeFights(report, fightResults);

        let deathCollectionPromise = new Promise(deathCollectionResolution => {
          this.getDeathData(report, report.RelativeStartTime, deathCollectionResolution, this.getMoreDeathsOrResolve);
        });

        deathCollectionPromise.then(() => {
          resolve();
        })
      });
    });
  }

  getDeathData(report: DeathReport, startTime, resolve, callback) {
    this.WarcraftLogsService.getDeaths(report.ReportId, startTime, report.RelativeEndTime).subscribe(deathResults => {
      DeathAnalyzer.analyzeDeaths(report, deathResults);
      callback(report, resolve, deathResults);
    });
  }

  getMoreDeathsOrResolve(report: DeathReport, resolve, deathResults) {
    if (deathResults.entries.length < 200) {
      this.finalize(report, resolve);
    } else {
      this.getDeathData(report, deathResults.entries[199]['timestamp'], resolve, this.getMoreDeathsOrResolve)
    }
  }

  private finalize(report: DeathReport, resolve) {
    resolve(report);
  }
}

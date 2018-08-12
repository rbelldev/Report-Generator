import { Injectable } from '@angular/core';
import {WarcraftLogsService} from '../../warcraft-logs/warcraft-logs.service';
import {FightAnalyzer} from '../../analyzers/FightAnalyzer/FightAnalyzer';
import {BaseReport} from '../../../models/reports/BaseReport';
import {IReportService} from '../IReportService';
import {FullReport} from '../../../models/reports/FullReport';

@Injectable({
  providedIn: 'root'
})
export class BaseReportService implements IReportService {

  constructor(private WarcraftLogsService: WarcraftLogsService) {}

  private getBaseReport(FullReport: FullReport): Promise<BaseReport> {
    return new Promise((resolve) => {
      let baseReport = new BaseReport();
      this.WarcraftLogsService.getFights(FullReport.RaidLogId).subscribe(fightResults => {
        FightAnalyzer.analyzeFights(baseReport, fightResults);
        resolve(baseReport);
      });
    });
  }

  getReport(FullReport: FullReport): Promise<null> {
    return new Promise(resolve => {
      this.getBaseReport(FullReport).then(baseReport => {
        FullReport.BaseReport = baseReport;
        resolve();
      })
    });
  }
}

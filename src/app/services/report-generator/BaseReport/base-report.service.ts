import { Injectable } from '@angular/core';
import {WarcraftLogsService} from '../../warcraft-logs/warcraft-logs.service';
import {FightAnalyzer} from '../../analyzers/FightAnalyzer/FightAnalyzer';
import {BaseReport} from '../../../models/reports/BaseReport';

@Injectable({
  providedIn: 'root'
})
export class BaseReportService {

  constructor(private WarcraftLogsService: WarcraftLogsService) {}

  getBaseReport(reportId): Promise<BaseReport> {
    return new Promise((resolve) => {
      let baseReport = new BaseReport(reportId);
      this.WarcraftLogsService.getFights(baseReport.ReportId).subscribe(fightResults => {
        FightAnalyzer.analyzeFights(baseReport, fightResults);
        resolve(baseReport);
      });
    });
  }
}

import { Injectable } from '@angular/core';
import {FullReport} from '../../models/reports/FullReport';
import {BaseReportService} from './BaseReport/base-report.service';
import {DamageDoneReportService} from './DamageDoneReport/damage-done-report.service';
import {DeathReportService} from './DeathReport/death-report.service';

@Injectable({
  providedIn: 'root'
})
export class RaidLogReportService {

  private CompletedReports: object = {
    BaseReportComplete: false,
    DamageDoneReportCompleteDone: false,
    DeathReportComplete: false,
  };

  constructor(private BaseReportService: BaseReportService,
              private DamageDoneReportService: DamageDoneReportService,
              private DeathReportService: DeathReportService) { }

  public getFullReport(raidLogId: string):Promise<FullReport> {

    return new Promise(resolve => {
      let fullReport = new FullReport(raidLogId);

      this.resetCompletedReports();

      this.BaseReportService.getReport(fullReport).then(() => {
        this.CompletedReports['BaseReportComplete'] = true;

        this.DeathReportService.getReport(fullReport).then(() => {
          this.CompletedReports['DeathReportComplete'] = true;

          this.attemptToResolve(fullReport, resolve);
        });

        this.DamageDoneReportService.getReport(fullReport).then(() => {
          this.CompletedReports['DamageDoneReportCompleteDone'] = true;

          this.attemptToResolve(fullReport, resolve);
        })
      });
    });
  }

  private attemptToResolve(FullReport: FullReport, resolve) {
    if(this.allReportsComplete()){
      resolve(FullReport);
    }
  }

  private resetCompletedReports() {
    Object.keys(this.CompletedReports).forEach(key => {
      this.CompletedReports[key] = false;
    })
  }

  private allReportsComplete(): boolean {
    return this.CompletedReports['BaseReportComplete']
      && this.CompletedReports['DamageDoneReportCompleteDone']
      && this.CompletedReports['DeathReportComplete']
  }
}

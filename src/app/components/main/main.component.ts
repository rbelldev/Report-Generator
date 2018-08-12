import {Component} from '@angular/core';
import {RaidLogReportService} from '../../services/report-generator/raid-log-report.service';
import {FullReport} from '../../models/reports/FullReport';
import {Fight} from '../../models/Fight';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public AvailableReports: string[] = ['Deaths', 'Total Damage', 'Total Healing'];
  public ActiveReport: string = "Deaths";
  public CurrentReport: FullReport;
  public Loading: boolean;
  public SelectedFight: Fight = null;

  constructor(private RaidLogReportService: RaidLogReportService) {}

  public getReport(reportName, reportId) {
    this.ActiveReport = reportName;
    if(reportId.length > 0) {
      if(!this.CurrentReport){
        this.generateBaseReportAndEmit(reportId)
      } else if(this.CurrentReport.RaidLogId != reportId) {
        this.generateBaseReportAndEmit(reportId)
      }
    }
  }

  public generateBaseReportAndEmit(reportId) {
    this.Loading = true;
    this.CurrentReport = undefined;

    this.RaidLogReportService.getFullReport(reportId).then( fullReport => {
      this.CurrentReport = fullReport;
      this.SelectedFight = null;
      this.Loading = false;
    })
  }

}

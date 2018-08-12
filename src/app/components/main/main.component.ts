import {Component} from '@angular/core';
import {RaidLogReportService} from '../../services/report-generator/raid-log-report.service';
import {FullReport} from '../../models/reports/FullReport';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public AvailableReports: string[] = ['Deaths', 'Total Damage', 'Total Healing'];
  public ActiveReport: string = "Deaths";
  public CurrentReport: FullReport;

  constructor(private RaidLogReportService: RaidLogReportService) {}

  public navigateToReport(reportName, reportId){
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
    this.RaidLogReportService.getFullReport(reportId).then( fullReport => {
      console.log("Full Report", fullReport);
      this.CurrentReport = fullReport;
    })
  }
}

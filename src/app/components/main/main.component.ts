import {Component, EventEmitter} from '@angular/core';
import {BaseReport} from '../../models/reports/BaseReport';
import {BaseReportService} from '../../services/report-generator/BaseReport/base-report.service';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public AvailableReports: string[] = ['Deaths', 'Total Damage', 'Total Healing'];
  public ActiveReport: string = "Deaths";
  public GenerateDataEmitter: EventEmitter<BaseReport>;
  public CurrentReport: BaseReport;

  constructor(private BaseReportService: BaseReportService) {
    this.GenerateDataEmitter = new EventEmitter<BaseReport>();
  }

  public navigateToReport(reportName, reportId){
    this.ActiveReport = reportName;
    if(reportId.length > 0) {
      if(!this.CurrentReport){
        this.generateBaseReportAndEmit(reportId)
      } else if(this.CurrentReport.ReportId != reportId) {
        this.generateBaseReportAndEmit(reportId)
      } else {
        this.GenerateDataEmitter.emit(this.CurrentReport);
      }
    }
  }

  public generateBaseReportAndEmit(reportId) {
    this.GenerateDataEmitter.emit(null);
    this.BaseReportService.getBaseReport(reportId).then( baseReport => {
      this.CurrentReport = baseReport;
      this.GenerateDataEmitter.emit(this.CurrentReport);
    })
  }
}

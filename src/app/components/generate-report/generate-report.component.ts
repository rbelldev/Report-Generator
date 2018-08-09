import { Component } from '@angular/core';
import {ReportGeneratorService} from '../../services/report-generator/report-generator.service';
import {Report} from '../../models/report';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent {

  public Report: Report;

  constructor(private ReportGenerator: ReportGeneratorService) {}

  getReport(logId): void{
    this.Report = new Report(logId);

    this.ReportGenerator.getReport(this.Report).then(() => {
      console.log(this.Report.Deaths)
    });
  }

  getKeys(obj){
      return Object.keys(obj);
  }

}

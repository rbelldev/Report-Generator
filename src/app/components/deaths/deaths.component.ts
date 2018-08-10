import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {DeathReportService} from '../../services/report-generator/DeathReport/death-report.service';
import {DeathReport} from '../../models/reports/DeathReport';
import {BaseReport} from '../../models/reports/BaseReport';

@Component({
  selector: 'deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.css']
})
export class DeathsComponent  implements OnInit {

  @Input() GenerateDataEmitter: EventEmitter<BaseReport>;
  public DeathReport: DeathReport;

  constructor(private DeathReportService: DeathReportService) {}

  ngOnInit(): void {
    this.GenerateDataEmitter.subscribe((baseReport) => {
      if(baseReport){
        if(!this.DeathReport || this.DeathReport.BaseReport.ReportId != baseReport.ReportId){
          this.DeathReport = null;
          this.DeathReportService.getDeathReport(baseReport).then((deathReport) => {
            this.DeathReport = deathReport;
          })
        }
      } else {
        this.DeathReport = null;
      }
    })
  }

}

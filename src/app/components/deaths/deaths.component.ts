import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {DeathReportService} from '../../services/report-generator/DeathReportService/death-report.service';
import {DeathReport} from '../../models/reports/DeathReport';

@Component({
  selector: 'deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.css']
})
export class DeathsComponent  implements OnInit{

  @Input() GenerateDataEmitter: EventEmitter<string>;
  public RenderData: boolean;
  public DeathReport: DeathReport;

  constructor(private DeathReportService: DeathReportService) {}

  ngOnInit(): void {
    this.GenerateDataEmitter.subscribe((reportId) => {
      this.RenderData = false;
      this.DeathReport = new DeathReport(reportId);

      this.DeathReportService.getDeathReport(this.DeathReport).then(() => {
        this.RenderData = true
      })
    })
  }

}

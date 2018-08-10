import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {DamageDoneReportService} from '../../services/report-generator/DamageDoneReport/damage-done-report.service';
import {DamageDoneReport} from '../../models/reports/DamageDoneReport';

@Component({
  selector: 'damage-done',
  templateUrl: './damage-done.component.html',
  styleUrls: ['./damage-done.component.css']
})
export class DamageDoneComponent implements OnInit {

  @Input() GenerateDataEmitter: EventEmitter<string>;
  public DamageDoneReport: DamageDoneReport;

  constructor(public DamageDoneReportService: DamageDoneReportService) { }

  ngOnInit(): void {
    this.GenerateDataEmitter.subscribe((baseReport) => {
      if(baseReport){
        if(!this.DamageDoneReport || this.DamageDoneReport.BaseReport.ReportId != baseReport.ReportId){
          this.DamageDoneReport = null;
          this.DamageDoneReportService.getTotalDamageReport(baseReport).then((damageDoneReport) => {
            this.DamageDoneReport = damageDoneReport;
            console.log(this.DamageDoneReport.DamageDone);
          })
        }
      } else {
        this.DamageDoneReport = null;
      }
    })
  }

}

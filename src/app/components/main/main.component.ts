import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public AvailableReports: string[] = ['Deaths', 'Total Damage', 'Total Healing'];
  public ActiveReport: string = "Deaths";
  public GenerateDataEmitter: EventEmitter<string>;

  constructor() {
    this.GenerateDataEmitter = new EventEmitter<string>();
  }

  public navigateToReport(reportName, reportId){
    this.ActiveReport = reportName;
    if(reportId.length > 0){
      this.GenerateDataEmitter.emit(reportId)
    }
  }
}

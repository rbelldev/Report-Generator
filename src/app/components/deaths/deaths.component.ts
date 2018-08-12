import {Component, Input} from '@angular/core';
import {FullReport} from '../../models/reports/FullReport';

@Component({
  selector: 'deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.css']
})
export class DeathsComponent {

  @Input() FullReport: FullReport;

  constructor() {}
}

import {Component, Input} from '@angular/core';
import {FullReport} from '../../models/reports/FullReport';
import {Fight} from '../../models/Fight';

@Component({
  selector: 'fight-summary',
  templateUrl: './fight-summary.component.html',
  styleUrls: ['./fight-summary.component.css']
})
export class FightSummaryComponent {

  @Input() FullReport: FullReport;
  @Input() SelectedFight: Fight;

  constructor() { }

}

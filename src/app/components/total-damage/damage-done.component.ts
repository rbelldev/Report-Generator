import {Component, Input} from '@angular/core';
import {FullReport} from '../../models/reports/FullReport';

@Component({
  selector: 'damage-done',
  templateUrl: './damage-done.component.html',
  styleUrls: ['./damage-done.component.css']
})
export class DamageDoneComponent {

  @Input() FullReport: FullReport;

  constructor() { }

}

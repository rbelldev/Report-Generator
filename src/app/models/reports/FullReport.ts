import {BaseReport} from './BaseReport';
import {DamageDoneReport} from './DamageDoneReport';
import {DeathReport} from './DeathReport';

export class FullReport {

  BaseReport: BaseReport;
  DamageDoneReport: DamageDoneReport;
  DeathReport: DeathReport;

  constructor(public RaidLogId: string) {}

}

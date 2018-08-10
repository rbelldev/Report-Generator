import {BaseReport} from './BaseReport';
import {Fight} from '../Fight';

export class TotalDamageReport implements BaseReport {
  Fights: Fight[] = [];
  GlobalEndTime: number;
  GlobalStartTime: number;
  RelativeEndTime: number;
  RelativeStartTime: number;
  Title: string;
  ZoneCode: number;

}

import {Fight} from '../Fight';

export interface IBaseReport {
  GlobalStartTime: number;
  GlobalEndTime: number;

  RelativeStartTime: number;
  RelativeEndTime: number;
  Title: string;
  ZoneCode: number;

  Fights: Fight[];
}

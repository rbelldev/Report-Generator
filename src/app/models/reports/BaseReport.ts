import {Fight} from '../Fight';

export class BaseReport {
  GlobalStartTime: number;
  GlobalEndTime: number;

  RelativeStartTime: number;
  RelativeEndTime: number;
  Title: string;
  ZoneCode: number;

  Fights: Fight[] = [];

  constructor(){}
}

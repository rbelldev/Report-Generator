import {Injectable} from '@angular/core';
import {WarcraftLogsService} from '../warcraft-logs/warcraft-logs.service';
import {Report} from '../../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportGeneratorService {

  constructor(private WarcraftLogsService: WarcraftLogsService) {}

  getReport(report: Report): Promise<any> {
    return new Promise( (resolve)=> {
      this.WarcraftLogsService.getFights(report.ReportId).subscribe(results => {
        console.log('Fights', results.fights);

        const lastIndex = (results.fights.length - 1);
        const lastFight = results.fights[lastIndex];
        const endTime = lastFight['end_time'];

        this.WarcraftLogsService.getDeaths(report.ReportId, endTime).subscribe(deaths => {
          console.log('Raw Deaths', deaths);
          report.Deaths = this.getDeathList(deaths.entries);
          resolve(Report);
        });
      });
    });
  }

  getDeathList(deaths): any {
    let deathList = {};

    deaths.forEach( death => {
      if(deathList[death.name]){
        deathList[death.name].count++
      } else {
        deathList[death.name] = {count: 1}
      }
    });

    return deathList
  }
}

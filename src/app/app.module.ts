import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {WarcraftLogsService} from './services/warcraft-logs/warcraft-logs.service';
import { DeathsComponent } from './components/deaths/deaths.component';
import {DeathReportService} from './services/report-generator/DeathReport/death-report.service';
import { DamageDoneComponent } from './components/total-damage/damage-done.component';
import { TotalHealingComponent } from './components/total-healing/total-healing.component';
import {BaseReportService} from './services/report-generator/BaseReport/base-report.service';
import {RaidLogReportService} from './services/report-generator/raid-log-report.service';
import { DifficultyPipe } from './pipes/difficulty.pipe';
import { FightSummaryComponent } from './components/fight-summary/fight-summary.component';
import { KilledPipe } from './pipes/killed.pipe';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { FightDurationPipe } from './pipes/fight-duration.pipe';
import { FightPercentagePipe } from './pipes/fight-percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DeathsComponent,
    DamageDoneComponent,
    TotalHealingComponent,
    DifficultyPipe,
    FightSummaryComponent,
    KilledPipe,
    FightDurationPipe,
    FightPercentagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [WarcraftLogsService, DeathReportService, BaseReportService, RaidLogReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DeathsComponent,
    DamageDoneComponent,
    TotalHealingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WarcraftLogsService, DeathReportService, BaseReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }

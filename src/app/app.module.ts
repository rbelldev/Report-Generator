import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {WarcraftLogsService} from './services/warcraft-logs/warcraft-logs.service';
import { DeathsComponent } from './components/deaths/deaths.component';
import {DeathReportService} from './services/report-generator/DeathReportService/death-report.service';
import { TotalDamageComponent } from './components/total-damage/total-damage.component';
import { TotalHealingComponent } from './components/total-healing/total-healing.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DeathsComponent,
    TotalDamageComponent,
    TotalHealingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WarcraftLogsService, DeathReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }

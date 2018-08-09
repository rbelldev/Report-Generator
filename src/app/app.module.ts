import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import {HttpClientModule} from '@angular/common/http';
import {WarcraftLogsService} from './services/warcraft-logs/warcraft-logs.service';
import {ReportGeneratorService} from './services/report-generator/report-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    GenerateReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WarcraftLogsService, ReportGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestComponent } from './test/test.component';
import { ShowReportsComponent } from './show-reports/show-reports.component';
import { ShowReportFormComponent } from './show-report-form/show-report-form.component';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { ReportsService } from 'src/services/reports.service';
import { UserService } from 'src/services/user.service';
import { DateSortPipe } from 'src/services/DateSortPipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TestComponent,
    ShowReportsComponent,
    ShowReportFormComponent,
    DateSortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    DateSortPipe
  ],
  providers: [ReportsService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

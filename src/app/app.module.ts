import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { ShowClassesComponent } from './classes/show-classes/show-classes.component';
import { AddEditClassesComponent } from './classes/add-edit-classes/add-edit-classes.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ShowTrainersComponent } from './trainers/show-trainers/show-trainers.component';
import { AddEditTrainersComponent } from './trainers/add-edit-trainers/add-edit-trainers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShowScheduleComponent } from './schedule/show-schedule/show-schedule.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustomersComponent } from './customer/show-customers/show-customers.component';
import { AddEditCustomerComponent } from './customer/add-edit-customer/add-edit-customer.component';
import { SharedService} from './_services/shared.service';
import { authInterceptorProviders } from './_helper/auth.interceptor';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { NavigatorComponent } from './page-elements/navigator/navigator.component';
import { FooterComponent } from './page-elements/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginTwoFactorComponent } from './login-two-factor/login-two-factor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainingsComponent } from './trainings/trainings.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AddEditScheduleComponent } from './schedule/add-edit-schedule/add-edit-schedule.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ShowReservationsComponent } from './reservations/show-reservations/show-reservations.component';
import { AddEditReservationsComponent } from './reservations/add-edit-reservations/add-edit-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ShowClassesComponent,
    AddEditClassesComponent,
    TrainersComponent,
    ShowTrainersComponent,
    AddEditTrainersComponent,
    ScheduleComponent,
    ShowScheduleComponent,
    CustomerComponent,
    ShowCustomersComponent,
    AddEditCustomerComponent,
    LoginComponent,
    HomeComponent,
    SingupComponent,
    NavigatorComponent,
    FooterComponent,
    ProfileComponent,
    LoginTwoFactorComponent,
    TrainingsComponent,
    AddEditScheduleComponent,
    ReservationsComponent,
    ShowReservationsComponent,
    AddEditReservationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    ScheduleModule, RecurrenceEditorModule, BrowserModule, ButtonModule
  ],
  providers: [SharedService, authInterceptorProviders, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

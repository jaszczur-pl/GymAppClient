import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClassesComponent} from './classes/classes.component';
import {TrainersComponent} from './trainers/trainers.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerComponent } from './customer/customer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LoginTwoFactorComponent } from './login-two-factor/login-two-factor.component';
import { TrainingsComponent } from './trainings/trainings.component';

const routes: Routes = [
  {path:'classes',component:ClassesComponent},
  {path:'trainers',component:TrainersComponent},
  {path:'customer',component:CustomerComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'trainings',component:TrainingsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SingupComponent},
  {path:'login2fa',component:LoginTwoFactorComponent},
  {path: '', component:HomeComponent},

  {path:'home', redirectTo:'', pathMatch: 'full'},
  {path:'trainers/profile', redirectTo:'profile', pathMatch: 'full'},
  {path:'classes/profile', redirectTo:'profile', pathMatch: 'full'},
  {path:'customer/profile', redirectTo:'profile', pathMatch: 'full'},
  {path:'schedule/profile', redirectTo:'profile', pathMatch: 'full'},
  {path:'trainings/profile', redirectTo:'profile', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

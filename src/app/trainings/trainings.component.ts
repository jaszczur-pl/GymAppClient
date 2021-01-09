import { Component, OnInit } from '@angular/core';
import {View, EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import { SharedService } from '../_services/shared.service';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-trainings',
  //template: `<ejs-schedule [views]='views'></ejs-schedule>`,
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {
  public views: View[] = ["Day", "Week", "Month"];
  ExtendedScheduleList:any =[];
  private dataManager: DataManager = new DataManager({
    url: 'https://localhost:44397/api/ExtendedSchedule',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
 });
  //public eventSettings: EventSettingsModel = { dataSource: this.dataManager };

  public eventSettings: EventSettingsModel = { 
    dataSource: this.ExtendedScheduleList
  }; 

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.service.getExtendedScheduleList().subscribe(data=>{
      this.ExtendedScheduleList=data;

for (let schedule of data){
  schedule.StartTime = schedule.StartTime + 'Z';
  schedule.EndTime = schedule.EndTime + 'Z';
} 

JSON.stringify(this.ExtendedScheduleList);

  console.log(this.ExtendedScheduleList);
    });
  }

}

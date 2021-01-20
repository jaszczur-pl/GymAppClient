import { Component, OnInit, ViewChild } from '@angular/core';
import {View, EventSettingsModel, PopupOpenEventArgs, ScheduleComponent, WorkHoursModel} from '@syncfusion/ej2-angular-schedule';
import { SharedService } from '../_services/shared.service';
import {L10n} from '@syncfusion/ej2-base';
import { DateTimePicker } from '@syncfusion/ej2-calendars';


L10n.load({
  'en-US': {
      'schedule': {
          'saveButton': '',
          'cancelButton': '',
          'deleteButton': '',
          'editEvent': 'Zajęcia grupowe',
      },
  }
});

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  //public currentEvent;
  public views: View[] = ["Day", "Week", "Month"];
  public isReadOnly: boolean = true;
  public ScheduleID;
  public isReserved?: boolean;

  public eventSettings: EventSettingsModel = { 
    allowDeleting: false,
    allowAdding: false,
    fields:{
      id: 'Id',
      subject: { name: 'Subject', title: 'Nazwa zajęć' },
      description: { name: 'NumberOfAvailablePlaces', title: 'Dostępna liczba miejsc' },
      location: { name: 'TrainerFullName', title: 'Trener'},
      startTime: { name: 'StartTime', title: 'Czas rozpoczęcia' },
      endTime: { name: 'EndTime', title: 'Czas Zakończenia' }
    }
  }; 

  constructor(private service: SharedService) {
    
  }

  ngOnInit(): void {
    this.service.getExtendedScheduleList().subscribe(data=>{
      this.eventSettings = {
        dataSource: data
      }
    });
  }

  public addReservation(){
    var val = {ScheduleID: this.ScheduleID}

    this.service.addReservation(val).subscribe(
      res=>{
        alert(res.toString());},
      err=>{
        var errorMessage = err.error.Message;
        alert(errorMessage);
      }
    );

  }

  public removeReservation(){

    this.service.removeReservation(this.ScheduleID).subscribe(
      res=>{
        alert(res.toString());},
      err=>{
        var errorMessage = err.error.Message;
        alert(errorMessage);
      }
    );

  }

  onPopupOpen(args: PopupOpenEventArgs){
    if (args.type === 'Editor') {

      this.ScheduleID = args.data!!['ID'];

      this.service.getClientReservation(this.ScheduleID).subscribe(
        data=>{this.isReserved = true, console.log('data')},
        err=>{this.isReserved = false, console.log('err')}
      )

      let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
      if (!startElement.classList.contains('e-datetimepicker')) {
          new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
      }
      let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
      if (!endElement.classList.contains('e-datetimepicker')) {
          new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
      }
    }
  } 

  onPopupClose(args: PopupOpenEventArgs){
    if (args.type === 'Editor') {
      this.ngOnInit();
    }
  }
}

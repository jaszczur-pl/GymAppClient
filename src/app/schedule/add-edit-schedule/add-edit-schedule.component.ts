import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-add-edit-schedule',
  templateUrl: './add-edit-schedule.component.html',
  styleUrls: ['./add-edit-schedule.component.css']
})
export class AddEditScheduleComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() schedules:any;
  ID!:number;
  ClassID!:number;
  TrainerID!:number;
  DateFrom!:Date;
  DateTo!:Date;
  NumberOfAvailablePlaces!:number;


  ngOnInit(): void {
    this.ID = this.schedules.ID;
    this.ClassID = this.schedules.ClassID;
    this.TrainerID = this.schedules.TrainerID;
    this.DateFrom = this.schedules.DateFrom;
    this.DateTo = this.schedules.DateTo;
    this.NumberOfAvailablePlaces = this.schedules.NumberOfAvailablePlaces;
  }

  addSchedule(){
    var val = {ID:this.ID,
               ClassID:this.ClassID,
               TrainerID:this.TrainerID,
               DateFrom:this.DateFrom,
               DateTo:this.DateTo,
               NumberOfAvailablePlaces:this.NumberOfAvailablePlaces};

    this.service.addSchedule(val).subscribe(res=>
      {alert('Pomyślnie dodano zajęcia');});
  }

  updateSchedule(){
    var val = {ID:this.ID,
              ClassID:this.ClassID,
              TrainerID:this.TrainerID,
              DateFrom:this.DateFrom,
              DateTo:this.DateTo,
              NumberOfAvailablePlaces:this.NumberOfAvailablePlaces};

    this.service.updateSchedule(val.ID, val).subscribe(res=>
      {alert('Pomyślnie zaktualizowano zajęcia');});
  }

}

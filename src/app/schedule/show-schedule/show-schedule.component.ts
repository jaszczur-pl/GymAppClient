import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {

  constructor(private service:SharedService) { }

  ScheduleList:any=[];

  ModalTitle!:string;
  AcitvateAddEditScheduleComp:boolean=false;
  schedules:any;

  ngOnInit(): void {
    this.refreshScheduleList();
  }

  addClick(){
    this.schedules={
      ID:0,
      ClassID:0,
      TrainerID:0,
      DateFrom:'',
      DateTo:'',
      NumberOfAvailablePlaces:0
    }
    this.ModalTitle="Dodaj zajęcia";
    this.AcitvateAddEditScheduleComp=true;
  }

  editClick(item:any){
    this.schedules=item;
    this.ModalTitle="Edytuj terminarz";
    this.AcitvateAddEditScheduleComp=true;
  }

  deleteClick(item:any){
    if(confirm('Czy jesteś pewien?')){
      this.service.deleteSchedule(item.ID).subscribe(data=>{
        alert('Pomyślnie usunięto zajęcia');
        this.refreshScheduleList();
      })
    }
  }
  closeClick(){
    this.AcitvateAddEditScheduleComp=false;
    this.refreshScheduleList();
  }

  refreshScheduleList(){
    this.service.getSchedulesList().subscribe(data=>{
      this.ScheduleList=data;
    });
  }
}

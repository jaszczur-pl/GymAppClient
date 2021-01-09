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
  schedule:any;

  ngOnInit(): void {
    this.refreshScheduleList();
  }

  editClick(item:any){
    this.schedule=item;
    this.ModalTitle="Edytuj terminarz";
    this.AcitvateAddEditScheduleComp=true;
  }

  deleteClick(item:any){
    if(confirm('Czy jesteś pewien?')){
      this.service.deleteSchedule(item.ID).subscribe(data=>{
        alert(data.toString());
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

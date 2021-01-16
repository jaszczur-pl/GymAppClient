import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/_services/shared.service';

@Component({
  selector: 'app-show-trainers',
  templateUrl: './show-trainers.component.html',
  styleUrls: ['./show-trainers.component.css']
})
export class ShowTrainersComponent implements OnInit {

  constructor(private service:SharedService) { }

  TrainersList:any=[];

  ModalTitle!:string;
  ActivateAddEditTrainersComp:boolean=false;
  trainers:any;

  ngOnInit(): void {
    this.refreshTrainersList();
  }

  addClick(){
    this.trainers={
      ID:0,
      Name:"",
      Surname:""
    }
    this.ModalTitle="Dodaj trenera";
    this.ActivateAddEditTrainersComp=true;
  }

  editClick(item:any){
    this.trainers=item;
    this.ModalTitle="Edytuj trenera";
    this.ActivateAddEditTrainersComp=true;
  }

  deleteClick(item:any){
    if(confirm('Czy jesteś pewien?')){
      this.service.deleteTrainer(item.ID).subscribe(data=>{
        alert('Pomyślnie usunięto trenera');
        this.refreshTrainersList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTrainersComp=false;
    this.refreshTrainersList();
  }

  refreshTrainersList(){
    this.service.getTrainersList().subscribe(data=>{
      this.TrainersList=data;
    });
  }
}

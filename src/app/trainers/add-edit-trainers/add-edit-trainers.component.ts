import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-add-edit-trainers',
  templateUrl: './add-edit-trainers.component.html',
  styleUrls: ['./add-edit-trainers.component.css']
})
export class AddEditTrainersComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() trainers:any;
  ID!:number;
  Name!:string;
  Surname!:string;

  ngOnInit(): void {
    this.ID = this.trainers.ID;
    this.Name = this.trainers.Name;
    this.Surname = this.trainers.Surname;
  }
  
  addTrainer(){
    var val = {ID:this.ID,
               Name:this.Name,
               Surname:this.Surname};

    this.service.addTrainer(val).subscribe(res=>
      {alert('Pomyślnie dodano trenera');});
  }

  updateTrainer(){
    var val = {ID:this.ID,
    Name:this.Name,
    Surname:this.Surname};

    this.service.updateTrainer(val.ID, val).subscribe(res=>
      {alert('Pomyślnie zaktualizowano dane trenera');});
  }
}

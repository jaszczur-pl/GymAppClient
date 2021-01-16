import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-add-edit-classes',
  templateUrl: './add-edit-classes.component.html',
  styleUrls: ['./add-edit-classes.component.css']
})
export class AddEditClassesComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() classes:any;
  ID!:number;
  Name!:string;
  UsersLimit!:number;

  ngOnInit(): void {
    this.ID = this.classes.ID;
    this.Name = this.classes.Name;
    this.UsersLimit = this.classes.UsersLimit;
  }
  
  addClass(){
    var val = {ID:this.ID,
               Name:this.Name,
               UsersLimit:this.UsersLimit};

    this.service.addClass(val).subscribe(res=>
      {alert('Pomyślnie dodano zajęcia');});
  }

  updateClass(){
    var val = {ID:this.ID,
    Name:this.Name,
    UsersLimit:this.UsersLimit};

    this.service.updateClass(val.ID, val).subscribe(res=>
      {alert('Pomyślnie zaktualizowano zajęcia');});
  }
}


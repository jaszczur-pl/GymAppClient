import { Component, OnInit} from '@angular/core';
import {SharedService} from 'src/app/_services/shared.service';

@Component({
  selector: 'app-show-classes',
  templateUrl: './show-classes.component.html',
  styleUrls: ['./show-classes.component.css']
})
export class ShowClassesComponent implements OnInit {

  constructor(private service:SharedService) { }

  ClassesList:any=[];

  ModalTitle!:string;
  AcitvateAddEditClassesComp:boolean=false;
  classes:any;

  ngOnInit(): void {
    this.refreshClassesList();
  }

  addClick(){
    this.classes={
      ID:0,
      Name:"",
      UsersLimit:0
    }
    this.ModalTitle="Dodaj zajęcia";
    this.AcitvateAddEditClassesComp=true;
  }

  editClick(item:any){
    this.classes=item;
    this.ModalTitle="Edytuj zajęcia";
    this.AcitvateAddEditClassesComp=true;
  }

  deleteClick(item:any){
    if(confirm('Czy jesteś pewien?')){
      this.service.deleteClass(item.ID).subscribe(data=>{
        alert('Pomyślnie usunięto zajęcia');
        this.refreshClassesList();
      })
    }
  }

  closeClick(){
    this.AcitvateAddEditClassesComp=false;
    this.refreshClassesList();
  }

  refreshClassesList(){
    this.service.getClassesList().subscribe(data=>{
      this.ClassesList=data;
    });
  }
  
}

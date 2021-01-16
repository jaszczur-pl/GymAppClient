import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-show-reservations',
  templateUrl: './show-reservations.component.html',
  styleUrls: ['./show-reservations.component.css']
})
export class ShowReservationsComponent implements OnInit {

  constructor(private service:SharedService) { }

  ReservationsList:any=[];

  ModalTitle!:string;
  AcitvateAddEditReservationsComp:boolean=false;
  reservations:any;

  ngOnInit(): void {
    this.refreshReservationList();
  }

  deleteClick(item:any){
    if(confirm('Czy jesteś pewien?')){
      this.service.deleteReservations(item.ID).subscribe(data=>{
        alert('Pomyślnie usunięto rezerwację');
        this.refreshReservationList();
      })
    }
  }

  refreshReservationList(){
    this.service.getReservationList().subscribe(data=>{
      this.ReservationsList=data;
    });
  }

}

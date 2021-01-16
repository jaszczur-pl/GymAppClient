import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {

  constructor(private service:SharedService) { }

  CustomersList:any=[];

  ModalTitle!:string;
  AcitvateAddEditCustomersComp:boolean=false;
  customers:any;

  ngOnInit(): void {
    this.refreshCustomersList();
  }

  editClick(item:any){
    this.customers=item;
    this.ModalTitle="Edytuj klienta";
    this.AcitvateAddEditCustomersComp=true;
  }

  deleteClick(item:any){
    if(confirm('Czy jesteś pewien?')){
      this.service.deleteCustomer(item.ID).subscribe(data=>{
        alert('Pomyślnie usunięto klienta');
        this.refreshCustomersList();
      })
    }
  }

  closeClick(){
    this.AcitvateAddEditCustomersComp=false;
    this.refreshCustomersList();
  }

  refreshCustomersList(){
    this.service.getCustomersList().subscribe(data=>{
      this.CustomersList=data;
    });
  }

}

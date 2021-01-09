import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() customers:any;
  ID!:number;
  Name!:string;
  Surname!:string;
  Email!:string;
  Password!:string;

  ngOnInit(): void {
    this.ID = this.customers.ID;
    this.Name = this.customers.Name;
    this.Surname = this.customers.Surname;
    this.Email = this.customers.Email;
  }
  
  updateCustomer(){
    var val = {ID:this.ID,
    Name:this.Name,
    Surname:this.Surname,
    Email:this.Email,
    Password:this.customers.Password};

    this.service.updateCustomer(val.ID, val).subscribe(res=>
      {alert(res.toString());});
  }

}

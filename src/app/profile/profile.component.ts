import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../_services/shared.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private token: TokenStorageService, private sharedService: SharedService) { }

  isChecked = true;
  isLoggedIn = false;
  Name!:string;
  Surname!:string;
  Email!:string;

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if(this.isLoggedIn){
      this.sharedService.getClientProfile().subscribe(
        data => {this.Name = data.Name,
                this.Surname = data.Surname,
                this.Email = data.Email,
                this.isChecked = data.TwoFactorEnabled});
    }
  }

  updateProfile(): void{
    var val = {Name:this.Name,
    Surname:this.Surname,
    Email:this.Email,
    TwoFactorEnabled:this.isChecked}

    this.sharedService.updateClientProfile(val).subscribe(res=>
      {alert(res.toString());});;
  }

}

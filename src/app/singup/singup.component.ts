import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  
  isSuccessful = false;
  isSignUpFailed = true;
  errorMessage = "";

  constructor(
    private service:AuthService, 
    private router:Router) { }

  ngOnInit(): void {
  }

  register(reg_data: any){

    var val = {Name:reg_data.name,
               Surname:reg_data.surname,
               Email:reg_data.email,
               Password:reg_data.password,
               ConfirmPassword:reg_data.confirmPassword};

    this.service.register(val).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['login']);
      },
      err =>{
        this.errorMessage = err.error.Message;
        alert(this.errorMessage);
        this.isSignUpFailed = true;
      }
    );
  }
}

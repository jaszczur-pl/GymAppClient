import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  isOTPneeded = true;
  errorMessage = "";
  roles: string[] = [];

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(login_data): void{
    var val = {Username:login_data.email,
               Password:login_data.password};

    this.authService.login(val).subscribe(
      data =>{
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data);
        this.isOTPneeded = JSON.parse(data.requireOTP.toLowerCase());

        if (this.isOTPneeded)
        {
          this.router.navigate(['login2fa']);
        } 
        else {
          this.router.navigate(['home']);
        }

     /* this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['home']); */
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    )
  }
}

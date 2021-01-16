import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login-two-factor',
  templateUrl: './login-two-factor.component.html',
  styleUrls: ['./login-two-factor.component.css']
})
export class LoginTwoFactorComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  
  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    private router:Router) { }

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()){
      this.router.navigate(['home']);
    }
  }

  onSubmit(two_factor_auth): void{

    this.authService.verifyOTP(two_factor_auth.code).subscribe(
      data =>{
        this.router.navigate(['home']);
     /*   this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['home']); */
      },
      err => {
        this.errorMessage = err.error.Message;
        alert(this.errorMessage);
        this.isLoginFailed = true;
      }
    )
  }
}

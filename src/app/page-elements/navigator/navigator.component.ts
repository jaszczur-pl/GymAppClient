import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username!: string;
  private roles!: string[];

  constructor(private tokenStorageService: TokenStorageService, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      
      this.showUserBoard = this.roles.includes('User');
      this.showAdminBoard = this.roles.includes('Admin');
      this.username = user.userName
    }
  }

  logout(): void {
    this.authService.logout().subscribe(data=>{});
    this.tokenStorageService.signOut();
    //window.location.reload();
  }

}

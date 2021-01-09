import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  readonly TOKEN_KEY = 'auth-token';
  readonly USER_KEY = 'auth-user';
  item:string = "";

  constructor() { }

  signOut(): void{
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void{
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null{
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public saveUser(user): void{
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any{
    return JSON.parse(sessionStorage.getItem(this.USER_KEY)!);
  }
}

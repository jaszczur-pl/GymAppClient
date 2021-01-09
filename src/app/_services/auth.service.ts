import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLSearchParams } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly TOKEN_API = 'https://localhost:44397/token'
  readonly REGISTER_API = 'https://localhost:44397/api/Account/Register'
  readonly TWO_FACTOR_API = 'https://localhost:44397/api/Account/VerifyOTP/'
  readonly LOGOUT_API = 'https://localhost:44397/api/Account/Logout'

  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})
  }

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any>{
    var body = 'username=' + credentials.Username + '&password=' + credentials.Password + '&grant_type=password';

    return this.http.post(this.TOKEN_API, body, this.httpOptions);
  }

  register(customer){
    return this.http.post(this.REGISTER_API, customer);
  }

  verifyOTP(code): Observable<any>{
    return this.http.get(this.TWO_FACTOR_API + code);
  }

  logout(): Observable<any>{
    return this.http.get(this.LOGOUT_API);
  }
}

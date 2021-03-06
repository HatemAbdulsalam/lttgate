import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { LoadingService } from './Loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService   {  

  jwtHelper = new JwtHelperService();
  baseUrl = environment.apiurl + 'Auth/';
 
  decodedToken:any;

constructor(private load:LoadingService ,private http: HttpClient) { }

login(model: any) {
this.load.present();
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) { localStorage.setItem('token', user.token);
      }
    })) 
}
loggedIn() {
  try{const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);}
  catch{
    return false
  }
 }
}

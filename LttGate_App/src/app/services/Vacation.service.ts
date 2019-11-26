import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vaction } from '../models/Vaction';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationService {
  baseUrl = environment.apiurl + 'Vacation/';

constructor(private http: HttpClient ) { }
decodedToken:any;
jwtHelper = new JwtHelperService();

getvaction( ): Observable<Vaction>{
  this.decodedToken =this.jwtHelper.decodeToken(localStorage.getItem('token'));
  return this.http.get<Vaction>(this.baseUrl + this.decodedToken.nameid);
    
}
}
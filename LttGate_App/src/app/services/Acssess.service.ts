import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationResult } from '../models/Pagination';
import { map, tap } from 'rxjs/operators';
import { Acssess } from '../models/Acssess';
import { JwtHelperService } from '@auth0/angular-jwt';
import { EmployeeViewModel } from '../models/EmployeeViewModel';
 
@Injectable({
  providedIn: 'root'
})
export class AcssessService {
  baseUrl = environment.apiurl + 'home/';
  decodedToken: any;
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) { }

  getHomeData( ): Observable<EmployeeViewModel>{
    this.decodedToken =this.jwtHelper.decodeToken(localStorage.getItem('token'));
    return this.http.get<EmployeeViewModel>(this.baseUrl + this.decodedToken.nameid);
      
  }

  getAcssess(page?, itemsPerPage?): Observable<PaginationResult<Acssess[]>> {
    const paginationResult: PaginationResult<Acssess[]> = new PaginationResult<Acssess[]>();
    this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));

    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
      params = params.append('id', this.decodedToken.nameid);
    }
    return this.http.get<Acssess[]>(this.baseUrl, { observe: 'response', params }).pipe(
      map(response => {
        paginationResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginationResult.pagination = JSON.parse(response.headers.get('Pagination'))
        }
        return paginationResult;
      })
    );
  }

}







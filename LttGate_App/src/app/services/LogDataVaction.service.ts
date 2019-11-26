import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
 import { Observable } from 'rxjs';
import { PaginationResult } from '../models/Pagination';
import { LogDate } from '../models/LogDate';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LogDataVactionService {

  baseUrl = environment.apiurl + 'logDataVacation/';
  decodedToken: any;
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) { }

  getLogdatavaction(page?, itemsPerPage? , searchTerm? ): Observable<PaginationResult<LogDate[]>> {
    const paginationResult: PaginationResult<LogDate[]> = new PaginationResult<LogDate[]>();
    this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
      params = params.append('id', this.decodedToken.nameid);
    }
    
    return this.http.get<LogDate[]>(this.baseUrl, { observe: 'response', params }).pipe(
      map(response => {
        paginationResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginationResult.pagination = JSON.parse(response.headers.get('Pagination'))
        }
        return paginationResult;
      })
  
    );
  }
  getLogdataEFvaction(page?, itemsPerPage? , searchTerm? ): Observable<PaginationResult<LogDate[]>> {
    const paginationResult: PaginationResult<LogDate[]> = new PaginationResult<LogDate[]>();
    this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
      params = params.append('id', this.decodedToken.nameid);

    }
    
    return this.http.get<LogDate[]>(this.baseUrl + 'ef/', { observe: 'response', params }).pipe(
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

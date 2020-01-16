import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationResult } from '../models/Pagination';
import { map, tap } from 'rxjs/operators';
 import { JwtHelperService } from '@auth0/angular-jwt';
 import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseUrl = environment.apiurl + 'card/';
  decodedToken: any;
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) { }

 

  getAcssess(page?, itemsPerPage?): Observable<PaginationResult<Card[]>> {
    const paginationResult: PaginationResult<Card[]> = new PaginationResult<Card[]>();
    this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));

    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
      params = params.append('id', this.decodedToken.nameid);
    }
    return this.http.get<Card[]>(this.baseUrl, { observe: 'response', params }).pipe(
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







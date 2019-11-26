import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
 import { PaginationResult } from '../models/Pagination';
import { map, tap } from 'rxjs/operators';
import { Advert } from '../models/Advert';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  baseUrl = environment.apiurl + 'advert/';

  constructor(private http: HttpClient) { }

  getAdvert(page?, itemsPerPage?     ): Observable<PaginationResult<Advert[]>> {
    const paginationResult: PaginationResult<Advert[]> = new PaginationResult<Advert[]>();
    let params = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    
   
    return this.http.get<Advert[]>(this.baseUrl, { observe: 'response', params }).pipe(
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

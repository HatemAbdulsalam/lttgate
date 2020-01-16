import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
 import { Contact } from '../models/Contact';
import { PaginationResult } from '../models/Pagination';
import { map, tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular'; 
 import { Observable , of} from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService { 
   baseUrl = environment.apiurl + 'contact/';

constructor(public loadingController: LoadingController , private http: HttpClient) { }
 


getUsers(page?, itemsPerPage? , searchTerm? ): Observable<PaginationResult<Contact[]>> {
  const paginationResult: PaginationResult<Contact[]> = new PaginationResult<Contact[]>();
  let params = new HttpParams();
  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }
  if (searchTerm != null) {
    params = params.append('searchTerm', searchTerm);
 
  }
   return this.http.get<Contact[]>(this.baseUrl, { observe: 'response', params }).pipe(
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

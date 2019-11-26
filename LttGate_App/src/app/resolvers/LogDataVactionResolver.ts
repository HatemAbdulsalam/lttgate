 

import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
  import { Observable , of} from 'rxjs';
import { catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { LogDate } from '../models/LogDate';
import { LogDataVactionService } from '../services/LogDataVaction.service';
   @Injectable()

export class LogDataVactionResolver implements Resolve<LogDate[]>{
    pageNumber = 1;
    pageSize = 30;
    constructor( private LogDataVactionService: LogDataVactionService ,private http: HttpClient,private router:Router ){}
 
    resolve(route:ActivatedRouteSnapshot):Observable<LogDate[]>{

        return this.LogDataVactionService.getLogdatavaction(this.pageNumber,this.pageSize).pipe(
          catchError(error => {
               this.router.navigate(['']);
              return of(null);
          })  
        )
    }
}

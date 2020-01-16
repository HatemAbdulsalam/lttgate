 

import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
  import { Observable , of} from 'rxjs';
import { catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { LogDate } from '../models/LogDate';
import { LogDataVactionService } from '../services/LogDataVaction.service';
import { LoadingService } from '../services/Loading.service';
   @Injectable()

export class LogDataVactionResolver implements Resolve<LogDate[]>{
    pageNumber = 1;
    pageSize = 60;
    constructor(private load:LoadingService , private LogDataVactionService: LogDataVactionService ,private http: HttpClient,private router:Router ){}
 
    resolve(route:ActivatedRouteSnapshot):Observable<LogDate[]>{
      this.load.present();

        return this.LogDataVactionService.getLogdatavaction(this.pageNumber,this.pageSize).pipe(
          catchError(error => {
            this.load.dismiss();

               this.router.navigate(['']);
              return of(null);
          })  
        )
    }
}

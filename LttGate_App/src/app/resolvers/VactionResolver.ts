 
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
   import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { VacationService } from '../services/Vacation.service';
import { Vaction } from '../models/Vaction';

@Injectable()
export class VactionResolver implements Resolve<Vaction>{

     constructor(private vacationService:VacationService,private router:Router ){}
    resolve(route:ActivatedRouteSnapshot):Observable<Vaction>{
        return this.vacationService.getvaction().pipe(
          catchError(error => {
               this.router.navigate(['']);
              return of(null);

          })  
        )
    }
}
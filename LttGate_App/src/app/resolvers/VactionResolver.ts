 
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
   import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { VacationService } from '../services/Vacation.service';
import { Vaction } from '../models/Vaction';
import { LoadingService } from '../services/Loading.service';

@Injectable()
export class VactionResolver implements Resolve<Vaction>{

     constructor(private load:LoadingService ,private vacationService:VacationService,private router:Router ){}
    resolve(route:ActivatedRouteSnapshot):Observable<Vaction>{
      this.load.present();
        return this.vacationService.getvaction().pipe(
          catchError(error => {
            this.load.dismiss();

               this.router.navigate(['']);
              return of(null);

          })  
        )
    }
}
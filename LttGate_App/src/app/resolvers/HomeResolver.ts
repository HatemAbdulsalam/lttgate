 
 
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
   import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { EmployeeViewModel } from '../models/EmployeeViewModel';
import { AcssessService } from '../services/Acssess.service';
import { LoadingService } from '../services/Loading.service';
  
@Injectable()
export class HomeResolver implements Resolve<EmployeeViewModel>{

     constructor(private load:LoadingService ,private acssessService:AcssessService,private router:Router ){}
    resolve(route:ActivatedRouteSnapshot):Observable<EmployeeViewModel>{
 
        return this.acssessService.getHomeData().pipe(
          catchError(error => {
            this.load.dismiss();

               this.router.navigate(['']);
              return of(null);

          })  
        )
    }
}
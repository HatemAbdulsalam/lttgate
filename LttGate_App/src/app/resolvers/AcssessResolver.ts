 

import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
 
import { Contact } from '../models/Contact';
import { ContactserviceService } from '../services/Contactservice.service';
import { Observable , of} from 'rxjs';
import { catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { AcssessService } from '../services/Acssess.service';
import { Acssess } from '../models/Acssess';
@Injectable()

export class AcssessResolver implements Resolve<Acssess[]>{
    pageNumber = 1;
    pageSize = 30;
    constructor( private acssessService: AcssessService ,private http: HttpClient,private router:Router ){}
 
    resolve(route:ActivatedRouteSnapshot):Observable<Acssess[]>{

        return this.acssessService.getAcssess(this.pageNumber,this.pageSize).pipe(
          catchError(error => {
               this.router.navigate(['']);
              return of(null);
          })  
        )
    }
}

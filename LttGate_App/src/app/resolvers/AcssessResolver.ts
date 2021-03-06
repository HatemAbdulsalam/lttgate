 

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
import { LoadingService } from '../services/Loading.service';
 @Injectable()

export class AcssessResolver implements Resolve<Acssess[]>{
    pageNumber = 1;
    pageSize = 30;
    constructor( private load:LoadingService ,private acssessService: AcssessService ,private http: HttpClient,private router:Router ){}
 
    resolve(route:ActivatedRouteSnapshot):Observable<Acssess[]>{
        this.load.present();
         return this.acssessService.getAcssess(this.pageNumber,this.pageSize).pipe(
 
          catchError(error => {
            this.load.dismiss();

               this.router.navigate(['']);
              return of(null);
          })   
 
        )
 
    }
}

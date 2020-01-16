 

import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Contact } from '../models/Contact';
import { ContactserviceService } from '../services/Contactservice.service';
import { Observable , of} from 'rxjs';
import { catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Card } from '../models/Card';
import { CardService } from '../services/Card.service';
import { LoadingService } from '../services/Loading.service';
  @Injectable()

export class CardResolver implements Resolve<Card[]>{
    pageNumber = 1;
    pageSize = 30;
    constructor( private load:LoadingService ,private cardService: CardService ,private http: HttpClient,private router:Router ){}
 
    resolve(route:ActivatedRouteSnapshot):Observable<Card[]>{
      this.load.present();

        return this.cardService.getAcssess(this.pageNumber,this.pageSize).pipe(
          catchError(error => {
            this.load.dismiss();

               this.router.navigate(['']);
              return of(null);
          })  
        )
    }
}
